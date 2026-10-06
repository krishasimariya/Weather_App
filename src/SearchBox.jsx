
import { useState, useEffect } from "react";
import TextField, { textFieldClasses } from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useDebounce from "./useDebounce";
import './SearchBox.css';

export default function SearchBox({ setWeatherInfo, setForecastInfo }) {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    let [city, setCity] = useState("");
    let [error, setError] = useState(false)

    const debouncedCity = useDebounce(city, 500);
    console.log("API KEY:", API_KEY);

    let API_URL ="https://api.openweathermap.org/data/2.5/weather";
    let FORECAST_API_URL ="https://api.openweathermap.org/data/2.5/forecast";
    //let API_KEY="cf6b7c69cf5c57284a263f4c255409c9"

    let getWeatherInfo = async (city) => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); 
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        if (response.status !== 200) {
                setError(true);
                setWeatherInfo(null);
                return;
            }
              setError(false);

        let result = {
            temp : jsonResponse.main.temp,
            humidity : jsonResponse.main.humidity,
            feelslike : jsonResponse.main.feels_like,
            pressure : jsonResponse.main.pressure,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            cityName : jsonResponse.name,
            weather : jsonResponse.weather[0].description,
    }
    console.log(result);
        setWeatherInfo(result);

    let forecastResponse = await fetch(`${FORECAST_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let forecastData = await forecastResponse.json();
        console.log("Forecast:", forecastData);

        let dailyForecast = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00"));
        console.log("Daily Forecast:", dailyForecast);

    let formattedForecast = dailyForecast.map((item) => ({
        date: item.dt_txt,
        temp: item.main.temp,
        minTemp: item.main.temp_min,
        maxTemp: item.main.temp_max,
        weather: item.weather[0].description,
        icon: item.weather[0].icon
}));
        console.log("Formatted Forecast:", formattedForecast);
        setForecastInfo(formattedForecast);
    } 
    
    catch(err){
       console.log(err);
            setError(true);
    }
    }
    useEffect(() => {

    if (debouncedCity.trim() !== "") {
        getWeatherInfo(debouncedCity);
    }

}, [debouncedCity]);

    let handleChange = (e) => {
        setCity(e.target.value);
        setError(false);
    }
    
    return (
    <div className="SearchBox" style={{ textAlign: "center" }}>
        <TextField
            id="city"
            label="Enter city name"
            variant="outlined"
            value={city}
            onChange={handleChange}/>
        {error && <p>No such place exists!</p>}
    </div>
);
}