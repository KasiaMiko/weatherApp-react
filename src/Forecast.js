import React, {useState} from "react";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded]= useState(false);
  const [forecast, setForecast]= useState(null);

  function handleForecast (response){
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name){
  return (
    <div className="row">
  <ForecastPreview data={forecast.list[0]}/>
  <ForecastPreview data={forecast.list[1]}/>
  <ForecastPreview data={forecast.list[2]}/>
  <ForecastPreview data={forecast.list[3]}/>
  <ForecastPreview data={forecast.list[4]}/>
  <ForecastPreview data={forecast.list[5]}/>
  </div>
  );}
  else {
let apiKey="cac6eb1808e7ad8b2e537949ab1a8c09"
let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleForecast);
return null;
  }

}