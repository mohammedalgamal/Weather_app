import getData, { getDailyData, getHourlyData, getCurrentData } from "./data";

function makeCurrentDom(currentData) {
    console.log(currentData);
    const cityNameDiv = document.querySelector("#cityName");
    cityNameDiv.innerText = currentData.cityName;

    const tempDiv = document.querySelector("#temp");
    tempDiv.innerText = currentData.temp;

    const iconImg = document.querySelector("#icon");
    iconImg.src = currentData.iconURL;
    iconImg.alt = currentData.weatherDescription;
};

function makeDailyDom(dailyData) {
    console.log(dailyData);
};

function makeHourlyDom(hourlyData) {
    console.log(hourlyData);
};

export function changeTempUnit() {
    const unitCheckBox = document.querySelector("#unitCheckBox");

    unitCheckBox.addEventListener("click", () => {
        const unit = unitCheckBox.checked ? "metric" : "imperial";
        const cityName = document.querySelector("#cityName").innerText;
        // eslint-disable-next-line no-use-before-define
        makeDomElements(cityName, unit);
    });
};

export default async function makeDomElements(city, unit) {
    const fullDataArray = await getData(city, unit);
    const fullData = fullDataArray[0];
    // console.log(fullData);

    const currentData = getCurrentData(fullData, fullDataArray[1], city, unit);
    const dailyData = getDailyData(fullData, unit);
    const hourlyData = getHourlyData(fullData, unit);

    makeCurrentDom(currentData);
    makeDailyDom(dailyData);
    makeHourlyDom(hourlyData);
};
