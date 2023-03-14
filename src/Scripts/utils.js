/* eslint-disable no-eval */
// eslint-disable-next-line import/no-extraneous-dependencies
import { format, utcToZonedTime } from "date-fns-tz";

export function round(num, precision = 0) {
    const multiplier = 10 ** precision;
    return Math.round(num * multiplier) / multiplier;
};

export default function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export function calculateDateAndTime(timeZone) {
    const date = new Date();
    const zonedDate = utcToZonedTime(date, timeZone);

    const datePattern = "EEEE, do MMM yy";
    const timePattern = "h:mm a";
    const dateOutput = format(zonedDate, datePattern);
    const timeOutput = format(zonedDate, timePattern);
    return [dateOutput, timeOutput];
};

export function getDay(timeZone, dayNumber) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    const todayDate = new Date();
    const todayZonedDate = utcToZonedTime(todayDate, timeZone);
    const todayName = format(todayZonedDate, "EEEE");
    const todayNumber = dayNames.indexOf(todayName);

    const dayOutput = dayNames[(dayNumber + todayNumber) % 7];

    return dayOutput;
};

export function changeHourFormat(hour, hourNumber) {
    const totalHour = hour + hourNumber;
    const timeOfDay = (totalHour % 24) >= 12 ? "PM" : "AM";

    const hourOutput = totalHour % 12 !== 0 ? totalHour % 12 : 12;

    return `${hourOutput} ${timeOfDay}`;
};

export function getHour(timeZone, hourNumber) {
    const todayDate = new Date();
    const todayZonedDate = utcToZonedTime(todayDate, timeZone);
    const nowName = format(todayZonedDate, "H");

    const hourOutput = changeHourFormat(Number(nowName), Number(hourNumber));

    return hourOutput;
};

export function getIconURL(code) {
    const finalCode = Number(code.slice(0, 2)) > 2 ? code.slice(0, 2) : code;

    return `./${finalCode}.png`;
};