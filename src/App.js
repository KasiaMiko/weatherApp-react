import React from "react";
import './App.css';
import Search from "./Search";
import Main from "./Main";
import Forecast from"./Forecast";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="container">
      <div className="weatherApp-wrapper">
        <div className="weatherApp">
          <Search />
          <Main />
          <div className="containerWeatherCards">
            <div className="row" id="forecast">
              <Forecast icon="🌨" time="16:00" temp={7} />
              <Forecast icon="☁️" time="19:00" temp={7} />
              <Forecast icon="☁️" time="22:00" temp={6} />
              <Forecast icon="🌨" time="01:00" temp={4} />
              <Forecast icon="☁️" time="04:00" temp={4} />
              <Forecast icon="🌥" time="07:00" temp={7} />
            </div>
          </div>
        </div>
        <p>
          <a
            href="https://github.com/KasiaMiko/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Katarzyna Mikoszewska
        </p>
      </div>
    </div>
  );
}

