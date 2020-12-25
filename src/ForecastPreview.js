import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastPreview.css"

export default function ForecastPreview (props){
    function hours(){
        let date= new Date(props.data.dt * 1000);
        let hours= date.getHours();
        return `${hours}:00`
    }
    return ( 
    <div className="col">
     <p className="forecastIcon"> <WeatherIcon code={props.data.weather[0].icon}/> </p>
     <h5 className="forecastTime"> {hours()}</h5>
     <h5 class="forecastTemp"> {Math.round(props.data.main.temp)} °C </h5>
   </div>
  
    )
}