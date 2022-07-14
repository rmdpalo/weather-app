import React, { useEffect, useState } from 'react';
import ForecastCard from './ForecastCard';
import './App.css';
console.log(process.env.REACT_APP_API_KEY)

const App = () => {

    const [weatherReports, setWeatherReports] = useState([]);
    const [weatherLocation, setWeatherLocation] = useState('San Diego');

    useEffect(() => {
        async function getReport() {
            const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${weatherLocation}&days=3&aqi=no&alerts=no`;
            const report = await fetch(url);

            const data = await report.json();
            setWeatherReports(data.forecast.forecastday);
            console.log(weatherReports);
        }

        getReport();
    },[])

    return(
        <>
            <div className="forecast-container">
                <h1>3 Day Weather Forecast</h1>
                <h2>{weatherLocation}</h2>
                <div className="report-container">
                    {weatherReports.map((report) => <ForecastCard props={report} />)}    
                </div>
            </div>
        </>
    )
}

export default App;