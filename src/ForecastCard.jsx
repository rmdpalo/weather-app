import React from "react";

const ForecastCard = (props) => {
    return(
        <div className="forecast-card">
            <h3>Date: {props.props.date}</h3>
            <h3>Avg Temp: {props.props.day.avgtemp_f} F / {props.props.day.avgtemp_c} C</h3>
            <p>Sunrise: {props.props.astro.sunrise}</p>
            <p>Sunset: {props.props.astro.sunset}</p>
            <p>High: {props.props.day.maxtemp_f} F / {props.props.day.maxtemp_c} C</p>
            <p>Low: {props.props.day.mintemp_f} F / {props.props.day.mintemp_c} C</p>
        </div>
    )
}

export default ForecastCard;