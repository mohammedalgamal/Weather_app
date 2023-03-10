import getData, { getDailyData, getHourlyData, getTodayData } from "./data";
import getCity from "./form";

function makeTodayDom(todayData) {
    console.log(todayData);
};

function makeDailyDom(dailyData) {
    console.log(dailyData);
};

function makeHourlyData(hourlyData) {
    console.log(hourlyData);
};

export default async function makeDomElements() {
    const city = getCity();
    const fullData = await getData(city);
    console.log(fullData);

    const todayData = getTodayData(fullData);
    const dailyData = getDailyData(fullData);
    const hourlyData = getHourlyData(fullData);

    makeTodayDom(todayData);
    makeDailyDom(dailyData);
    makeHourlyData(hourlyData);
};
