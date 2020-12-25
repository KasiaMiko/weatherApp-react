import React from "react";
import './App.css';
import Search from "./Search";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="container">
      <div className="weatherApp-wrapper">
        <div className="weatherApp">
          <Search defaultCity="Wrocław" />
        </div>
        <p>
          <a
            href="https://github.com/KasiaMiko/weatherApp-react"
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

