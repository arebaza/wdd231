const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const weatherIcon = document.querySelector("#weather-icon");
const forecastContainer = document.querySelector("#forecast");

const latitude = 40.30;
const longitude = -111.69;
const apiKey = "YOUR_API_KEY_HERE";

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function getCurrentWeather() {
  try {
    const response = await fetch(currentWeatherUrl);

    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Current weather error:", error);
  }
}

function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

  const description = data.weather[0].description;
  weatherDesc.textContent = capitalizeWords(description);

  const iconSource = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIcon.setAttribute("src", iconSource);
  weatherIcon.setAttribute("alt", description);
}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);

    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Forecast error:", error);
  }
}

function displayForecast(data) {
  forecastContainer.innerHTML = "";

  const dailyForecasts = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  dailyForecasts.slice(0, 3).forEach((day) => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    const forecastItem = document.createElement("p");
    forecastItem.innerHTML = `<strong>${dayName}:</strong> ${Math.round(day.main.temp)}&deg;F`;

    forecastContainer.appendChild(forecastItem);
  });
}

function capitalizeWords(text) {
  return text.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

getCurrentWeather();
getForecast();