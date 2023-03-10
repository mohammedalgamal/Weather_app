import makeDomElements from "./dom";

export default function getCity() {
    const btn = document.querySelector("#searchBtn");
    const search = document.querySelector("#search");
    makeDomElements("Cairo");

    btn.addEventListener("click", () => {
        if (search.value !== "") {
            makeDomElements(search.value);
        };
    });

    window.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && search.value !== "") {
            makeDomElements(search.value);
        };
    });
};