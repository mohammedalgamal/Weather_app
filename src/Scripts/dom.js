import getData, { getDailyData, getHourlyData, getCurrentData } from "./data";

function makeCurrentDom(currentData) {
    // Left main content
    const weatherDescription = document.querySelector(".weatherDescription");
    weatherDescription.innerText = currentData.weatherDescription;

    const cityNameDiv = document.querySelector(".cityName");
    cityNameDiv.innerText = currentData.cityName;

    const dateAndTime = document.querySelector(".dateAndTime");
    dateAndTime.innerHTML = `${currentData.date} <br> ${currentData.time}`;

    const tempDiv = document.querySelector(".temp");
    tempDiv.innerText = currentData.temp;

    const iconImg = document.querySelector("#icon");
    iconImg.src = currentData.iconURL;
    iconImg.alt = currentData.weatherDescription;

    // Right main content
    const feelsLike = document.querySelector(".feelsLike");
    feelsLike.innerText = currentData.feelsLike;

    const humidity = document.querySelector(".humidity");
    humidity.innerText = currentData.humidity;

    const rainChance = document.querySelector(".chanceOfRain");
    rainChance.innerText = currentData.rainChance;

    const windSpeed = document.querySelector(".windSpeed");
    windSpeed.innerText = currentData.windSpeed;
};

function makeDailyDom(dailyData) {
    document.querySelector(".dailyData").innerHTML = "";
    for (let i = 1; i <= 7; i++) {
        document.querySelector(".dailyData").innerHTML += `
        <div class="day day${i}">
          <div class="dayName">
            ${dailyData[`day${i}`].dayName}
          </div>
          <div class="temp">
            <div class="maxTemp">
                ${dailyData[`day${i}`].maxTemp}
            </div>
            <div class="minTemp">
                ${dailyData[`day${i}`].minTemp}
            </div>
          </div>
          <div class="icon">
            <img src="${dailyData[`day${i}`].iconURL}" alt="icon">
          </div>
        </div>
        `;
    };
};

function makeHourlyDom(hourlyData) {
    console.log(hourlyData);
    for (let i = 1; i <= 3; i++) {
        const container = document.querySelector(`[data-index="${i}"]`);
        container.innerHTML = "";
        for (let j = 1; j <= 8; j++) {
            const index = i * j;
            container.innerHTML += `
            <div class="hour">
                <div class="hourName">${hourlyData[`hour${index}`].hourName}</div>
                <div class="temp">${hourlyData[`hour${index}`].temp}</div>
                <div class="iconDiv">
                    <img src="${hourlyData[`hour${index}`].iconURL}" alt="Icon" class="icon" />
                </div>
            </div>`;
        };
    };
};

export function changeTempUnit() {
    const unitCheckBox = document.querySelector("#unitCheckBox");

    unitCheckBox.addEventListener("click", () => {
        const unit = unitCheckBox.checked ? "metric" : "imperial";
        const cityName = document.querySelector(".cityName").innerText;
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
