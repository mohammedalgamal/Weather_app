import getData, { getDailyData, getHourlyData, getCurrentData } from "./data";

function makeCurrentDom(currentData) {
    console.log(currentData);
    const cityNameDiv = document.querySelector("#cityName");
    cityNameDiv.innerText = currentData.cityName;
};

function makeDailyDom(dailyData) {
    console.log(dailyData);
};

function makeHourlyData(hourlyData) {
    console.log(hourlyData);
};

export function changeTempUnit() {
    const unitCheckBox = document.querySelector("#unitCheckBox");

    unitCheckBox.addEventListener("click", () => {
        const unit = unitCheckBox.checked ? "metric" : "standard";
        const cityName = document.querySelector("#cityName").innerText;
        // eslint-disable-next-line no-use-before-define
        makeDomElements(cityName, unit);
    });
};

export default async function makeDomElements(city, unit) {
    const fullDataArray = await getData(city, unit);
    const fullData = fullDataArray[0];
    console.log(fullData);

    const currentData = getCurrentData(fullData, fullDataArray[1], city);
    const dailyData = getDailyData(fullData);
    const hourlyData = getHourlyData(fullData);

    makeCurrentDom(currentData);
    makeDailyDom(dailyData);
    makeHourlyData(hourlyData);
};
