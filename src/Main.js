import React from "react";
import "./Main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
  return (
    <div className="Main">
      <h1>Wrocław</h1>
      <div className="row">
        <div className="col-4">
          <ul>
            <li className="currentDay"> Sunday</li>
            <li className="currentTime"> 13:00</li>
            <li className="weatherCondition"> Clear</li>
          </ul>
        </div>
        <div className="col-4">
          <div className="weatherIcon" role="img">
            ☁️
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li className="temperature">
              {" "}
              19 <strong>°C</strong>{" "}
            </li>
            <li className="wind"> Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
