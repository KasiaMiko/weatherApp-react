import React from "react";
import "./Search.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <form id="search-form">
        <input
          className="enterCity"
          type="text"
          id="search-text-input"
          autocomplete="off"
          placeholder="In which city would you like to check the weather?"
        />

        <input
          type="submit"
          className="btn btn-info"
          value="Submit"
          id="submitButton"
        />
        <button className="btn btn-success" id="currentButton">
          {" "}
          Current{" "}
        </button>
      </form>
    </div>
  );
}