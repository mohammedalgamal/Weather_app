import getData from "./data";

function makeForm() {
    document.body.innerHTML += `
    <input type="search" name="search" id="search" placeholder="Enter city name">
    <button id="searchBtn">Search</button>
    `;
};

export default function getCity() {
    makeForm();
    const btn = document.querySelector("#searchBtn");
    const search = document.querySelector("#search");

    btn.addEventListener("click", () => {
        getData(search.value);
    });
};