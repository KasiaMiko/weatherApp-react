import React from "react";
import "./Main.css";
import FormattedDate from "./FormattedDate";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherIcon from "./WeatherIcon";


export default function Main(props) {
  return (
    <div className="Main">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-4">
          <ul>
            <li className="currentDay">
              <FormattedDate date={props.data.date} />
              </li>
            <li className="weatherCondition">{props.data.description} </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="weatherIcon" role="img">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li className="temperature">
              {" "}
              {Math.round(props.data.temperature)} <strong>°C</strong>{" "}
            </li>
            <li className="wind"> Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
