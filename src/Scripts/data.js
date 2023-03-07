export default async function getData(city = "cairo", unit = "standard") {
    const APIKey = "d3038b3303b62168dd448fbeb4531d41";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}`);
    const data = await response.json();
    const fullResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,alerts&units=${unit}&APPID=${APIKey}`);
    const fullData = await fullResponse.json();
    console.log(fullData);
};