import capitalize from "./utils";

// eslint-disable-next-line consistent-return
export default async function getData(city = "cairo", unit = "standard") {
    const APIKey = "d3038b3303b62168dd448fbeb4531d41";
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}`);
        let data;
        if (response.status === 200) {
            data = await response.json();
        }
        else {
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=cairo&APPID=${APIKey}`);
            data = await response.json();
        };
        const fullResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,alerts&units=${unit}&APPID=${APIKey}`);
        const fullData = await fullResponse.json();
        return fullData;
    } catch (err) {
        console.log(err);
    };
};

export function getCurrentData(fullData) {
    const currentData = {};

    currentData.weatherDescription = capitalize(fullData.current.weather[0].description);

    return currentData;
};

export function getDailyData(fullData) {
    return fullData;
};

export function getHourlyData(fullData) {
    return fullData;
};