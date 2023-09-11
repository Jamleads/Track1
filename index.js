const currentDay = document.querySelector(".current-day");
const currentTime = document.querySelector(".current-time");

const date = new Date();
const dayOfTheWeek = date.toLocaleDateString("en-US", { weekday: "long" });
currentDay.textContent = dayOfTheWeek;

const timeUTC = date.toUTCString().split(" ")[4];

currentTime.textContent = timeUTC;

// Mon, 11 Sep 2023 10:39:49 GMT

// function Day() {
//   const date = new Date();
//   const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
//   return dayOfWeek;
// }

// currentDay.textContent = Day();
