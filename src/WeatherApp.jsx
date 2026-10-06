import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import Forecast from "./Forecast";

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState(null);
    let [forecastInfo, setForecastInfo] = useState(null);

    return (
        <div  className="WeatherApp">

            <h1>Weather App</h1>

            <SearchBox setWeatherInfo={setWeatherInfo} setForecastInfo = {setForecastInfo}/>
            <br /><br />
            <InfoBox weatherInfo={weatherInfo} />
            <Forecast forecast={forecastInfo} />
        </div>
    );
}