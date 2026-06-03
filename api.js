const API_KEY = "7bd76a5d8554094f724801b3dfe9dbe9";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const temp = document.querySelector(".temp");
const City = document.querySelector(".city");

const value = document.querySelectorAll(".value");

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

async function checkWeather(city) {

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    City.innerText = data.name;
    temp.innerText = Math.round(data.main.temp) + "°C";

    value[0].innerText = data.main.humidity + "%";
    value[1].innerText = data.wind.speed + " km/h";

    console.log(data);
}

