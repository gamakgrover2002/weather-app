import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import { useState } from "react";
import axios from "axios";
function App() {
  const apikey = "ab5ae0f06acea9b2f708dcb1410e9242";
  const [data, Setdata] = useState("");
  const [city, Setcity] = useState({});

  const getWeatherDetails = (city) => {
    if (!city) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apikey;
    axios
      .get(apiURL)
      .then((res) => {
        Setdata(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    Setcity(e.target.value);
  };
  const handleSearch = () => {
    getWeatherDetails(city);
  };
  useEffect(() => {
    getWeatherDetails("Delhi");
  }, []);
  return (
    <>
      <Header />

      <div id="weatherbg">
        <h1>Weather App</h1>

        <input
          id="location-input"
          type="text"
          placeholder="enter location"
          onChange={handleChangeInput}
        ></input>
        <br />
        <button id="submit-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div id="container">
        <div id="display">
          <div id="display-img"></div>
          <div id="display-text">
            <p>
              City:{data.name}
              <br /> Temp : {(data?.main?.temp - 273.15).toFixed(2)}°C
              <br />
              Temp-max : {(data?.main?.temp_max - 273.15).toFixed(2)}°C
              <br />
              Temp-min : {(data?.main?.temp_min - 273.15).toFixed(2)}°C
            </p>
          </div>
        </div>
        <div id="display">
          <div id="display-img2"></div>
          <div id="display-text">
            <p>
              <h5>Wind Conditions</h5>
              deg: {data?.wind?.deg}
              <br />
              Humidity:{data?.main?.humidity}
              <br />
              speed: {data?.wind?.speed}
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
