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
    const fullData = await getData(city);
    console.log(fullData);

    const currentData = getCurrentData(fullData);
    const dailyData = getDailyData(fullData);
    const hourlyData = getHourlyData(fullData);

    makeCurrentDom(currentData);
    makeDailyDom(dailyData);
    makeHourlyData(hourlyData);
};
