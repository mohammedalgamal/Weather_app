export default function changeDisplay() {
  const dailyBtn = document.querySelector(".dailyBtn");
  const hourlyBtn = document.querySelector(".hourlyBtn");
  const dailyData = document.querySelector(".dailyData");
  const hourlyData = document.querySelector(".hourlyData");

  dailyBtn.addEventListener("click", () => {
    dailyBtn.classList.add("focus");
    hourlyBtn.classList.remove("focus");
    dailyData.classList.remove("nonActive");
    hourlyData.classList.add("nonActive");
  });

  hourlyBtn.addEventListener("click", () => {
    hourlyBtn.classList.add("focus");
    dailyBtn.classList.remove("focus");
    hourlyData.classList.remove("nonActive");
    dailyData.classList.add("nonActive");
  });
}
