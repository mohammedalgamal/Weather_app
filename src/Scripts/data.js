import capitalize, {
  calculateDateAndTime,
  getDay,
  getHour,
  getIconURL,
  round,
} from "./utils";

// eslint-disable-next-line consistent-return
export default async function getData(city = "cairo", unit = "metric") {
  const APIKey = "d3038b3303b62168dd448fbeb4531d41";
  let isCairo = true;
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}`
    );
    let data;

    if (response.status === 200) {
      data = await response.json();
      isCairo = false;
    } else {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=cairo&APPID=${APIKey}`
      );
      data = await response.json();
      isCairo = true;
    }

    const fullResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,alerts&units=${unit}&APPID=${APIKey}`
    );
    const fullData = await fullResponse.json();
    return [fullData, isCairo];
  } catch (err) {
    console.log(err);
  }
}

export function getCurrentData(fullData, isCairo, city, unit) {
  const currentData = {};

  currentData.weatherDescription = capitalize(
    fullData.current.weather[0].description
  );

  currentData.cityName = isCairo ? "Cairo" : capitalize(city);

  [currentData.date, currentData.time] = calculateDateAndTime(
    fullData.timezone
  );

  currentData.temp =
    unit === "metric"
      ? `${round(fullData.current.temp)} °C`
      : `${round(fullData.current.temp)} °F`;

  currentData.feelsLike =
    unit === "metric"
      ? `${round(fullData.current.feels_like)} °C`
      : `${round(fullData.current.feels_like)} °F`;

  currentData.humidity = `${round(fullData.current.humidity)}%`;

  currentData.rainChance = `${round(fullData.daily[0].pop * 100)}%`;

  currentData.windSpeed =
    unit === "metric"
      ? `${round(fullData.current.wind_speed * 3.6, 1)} km/h`
      : `${round(fullData.current.wind_speed, 1)} mph`;

  currentData.iconURL = getIconURL(fullData.current.weather[0].icon);

  return currentData;
}

export function getDailyData(fullData, unit) {
  const dailyData = {};

  for (let i = 1; i <= 7; i++) {
    dailyData[`day${i}`] = {};

    dailyData[`day${i}`].dayName = getDay(fullData.timezone, i);

    dailyData[`day${i}`].maxTemp =
      unit === "metric"
        ? `${round(fullData.daily[i].temp.max)} °C`
        : `${round(fullData.daily[i].temp.max)} °F`;

    dailyData[`day${i}`].minTemp =
      unit === "metric"
        ? `${round(fullData.daily[i].temp.min)} °C`
        : `${round(fullData.daily[i].temp.min)} °F`;

    dailyData[`day${i}`].iconURL = getIconURL(
      fullData.daily[i].weather[0].icon
    );
  }

  return dailyData;
}

export function getHourlyData(fullData, unit) {
  const hourlyData = {};

  for (let i = 1; i <= 24; i++) {
    hourlyData[`hour${i}`] = {};

    hourlyData[`hour${i}`].hourName = getHour(fullData.timezone, i);

    hourlyData[`hour${i}`].temp =
      unit === "metric"
        ? `${round(fullData.hourly[i].temp)} °C`
        : `${round(fullData.hourly[i].temp)} °F`;

    hourlyData[`hour${i}`].iconURL = getIconURL(
      fullData.hourly[i].weather[0].icon
    );
  }

  return hourlyData;
}
