import makeDomElements, { changeTempUnit } from "./dom";

export default function getCity() {
    const btn = document.querySelector("#searchBtn");
    const search = document.querySelector("#search");
    const unitCheckBox = document.querySelector("#unitCheckBox");
    let unit = unitCheckBox.checked ? "metric" : "imperial";

    makeDomElements("Cairo", unit);
    changeTempUnit();

    btn.addEventListener("click", () => {
        if (search.value !== "") {
            unit = unitCheckBox.checked ? "metric" : "imperial";
            makeDomElements(search.value, unit);
        };
    });

    window.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && search.value !== "") {
            unit = unitCheckBox.checked ? "metric" : "imperial";
            makeDomElements(search.value, unit);
        };
    });
};