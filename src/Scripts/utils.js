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