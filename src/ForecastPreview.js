import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview (props){
    return (
    
    <div className="col">
     <h4 className="forecastIcon"> sun</h4>
     <h5 className="forecastTime"> 16:00</h5>
     <h5 class="forecastTemp"> 5 °C </h5>
   </div>
  
    )
}