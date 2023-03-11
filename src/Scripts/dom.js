import getData, { getDailyData, getHourlyData, getCurrentData } from "./data";

function makeCurrentDom(currentData) {
    console.log(currentData);
};

function makeDailyDom(dailyData) {
    console.log(dailyData);
};

function makeHourlyData(hourlyData) {
    console.log(hourlyData);
};

export default async function makeDomElements(city) {
    const fullDataArray = await getData(city);
    const fullData = fullDataArray[0];
    console.log(fullData);

    const currentData = getCurrentData(fullData, fullDataArray[1], city);
    const dailyData = getDailyData(fullData);
    const hourlyData = getHourlyData(fullData);

    makeCurrentDom(currentData);
    makeDailyDom(dailyData);
    makeHourlyData(hourlyData);
};
