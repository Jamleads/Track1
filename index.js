const currentDay = document.querySelector(".current-day");
const currentTime = document.querySelector(".current-time");

const date = new Date();
const dayOfTheWeek = date.toLocaleDateString("en-US", { weekday: "long" });
currentDay.textContent = dayOfTheWeek;

const timeUTC = date.toUTCString().split(" ")[4];

currentTime.textContent = timeUTC;
