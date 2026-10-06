import "./Forecast.css";

export default function forecast({ forecast }) {
    if (!forecast || forecast.length === 0) {
        return null;
    }

    return (
        <div className="forecast">
            <h2>5-Day Forecast</h2>
            <div className="forecast-container">
                {forecast.map((day, index) => {
                    let date = new Date(day.date);
                    let dayName = date.toLocaleDateString("en-US", {
                        weekday: "short"});
    
    return (<div className="forecast-card" key={index}>

                            {/* Day */}
                            <h3>{dayName}</h3>

                            {/* Weather Icon */}
                            <img
                                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                                alt={day.weather}
                            />

                            {/* Temperature */}
                            <h3>
                                {Math.round(day.temp)}°C
                            </h3>

                            {/* Min / Max */}
                            <p>
                                ↓ {Math.round(day.minTemp)}°C
                                &nbsp;&nbsp;
                                ↑ {Math.round(day.maxTemp)}°C
                            </p>

                            {/* Weather Description */}
                            <p>
                                {day.weather}
                            </p>

                        </div>
                    );

                })}

            </div>

        </div>
    );
}