// import ('dotenv').congif();
import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const button = document.getElementById("getTemp");
const cityInput = document.getElementById("city");
const weatherResult = document.getElementById("weatherbox");
const cityName = document.createElement('p');
const currentTemp = document.createElement('p');
currentTemp.id = "weatherColor"
const weatherDesc = document.createElement('p');
const minTemp = document.createElement('p');
const maxTemp = document.createElement('p');

button.addEventListener("click", async (e) => {
    e.preventDefault();
    const citySearch = cityInput.value;
    cityInput.value = "";
    try{
        const res = await axios.get(`${BASE_URL}q=${citySearch}&units=imperial&appid=${API_KEY}`)
        console.log(res.data)
        cityName.textContent = res.data.name;
        weatherDesc.textContent = `${res.data.weather[0].description}`;
        currentTemp.textContent = `${Math.floor(res.data.main.temp)} degrees`;
        currentTemp.style.color = checkWeather(currentTemp.textContent);
        minTemp.textContent = `Min: ${Math.floor(res.data.main.temp_min)} degrees`;
        maxTemp.textContent = `Max: ${Math.ceil(res.data.main.temp_max)} degrees`;
        weatherResult.appendChild(cityName);
        weatherResult.appendChild(weatherDesc);
        weatherResult.appendChild(currentTemp);
        weatherResult.appendChild(minTemp);
        weatherResult.appendChild(maxTemp);
        
    } catch (err) {
        console.log(err)
    }
})

function checkWeather (weather) {
    if(weather < 40) {
        return "blue";
    } else if (weather > 90) {
        return "red";
    } else {
        return "black";
    }
}