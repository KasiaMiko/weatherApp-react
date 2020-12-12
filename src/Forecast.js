import React from "react";
import "./Forecast.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Forecast(props) {
  return (
    <div className="col">
      <h4 className="forecastIcon"> {props.icon}</h4>
      <h5 className="forecastTime"> {props.time}</h5>
      <h5 class="forecastTemp"> {props.temp} °C </h5>
    </div>
  );
}