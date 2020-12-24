import React, {useState} from "react";
import "./Search.css";
import Main from "./Main";
import Forecast from "./Forecast";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Search(props) {
  const [city, setCity]= useState(props.defaultCity);
  const [weatherData, setWeatherData]= useState ({ready: false});
 
  function handleResponse (response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit (event){
    event.preventDefault();
    searchCity()
  }
  function handleCityChange (event){
    setCity(event.target.value);
  }
  function searchCity(){
    const apiKey="cac6eb1808e7ad8b2e537949ab1a8c09"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  if (weatherData.ready) {
  return (
    <div className="Search">
      <div className="container">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          className="enterCity"
          type="text"
          id="search-text-input"
          autocomplete="off"
          placeholder="In which city would you like to check the weather?"
          onChange={handleCityChange}
        />

        <input
          type="submit"
          className="btn btn-info"
          value="Submit"
          id="submitButton"
        />
      </form>
      < Main data={weatherData}/>
      < Forecast city={weatherData.city}/>
    </div>
    </div>
  );
  } else {
    searchCity();
    return "Loading...";
  }
}