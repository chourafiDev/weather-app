import React from "react";
import Image from "next/image";

const Weather = ({ weather }) => {
  return (
    <div className="weatehr-card">
      <div className="weatehr-card-top d-flex">
        <div className="text-center">
          <Image
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="weather-type text-white font-w6 m-0">
            {weather.weather[0].main}
          </p>
        </div>
        <div>
          <p className="weather-temp text-white font-w6 m-0">
            {weather.main.temp.toFixed(0)}&#176;
          </p>
        </div>
      </div>
      <div className="weatehr-card-bottom">
        <p className="text-center text-white font-w6 text-xl mb-2">
          Weather in {weather.name}
        </p>

        <div className="d-flex">
          <div className="text-center">
            <p className="text-white font-w5">
              {weather.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-white font-w5">Feels Like</p>
          </div>
          <div className="text-center">
            <p className="text-white font-w5">{weather.main.humidity}%</p>
            <p className="text-white font-w5">Humidity</p>
          </div>
          <div className="text-center">
            <p className="text-white font-w6">
              {weather.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-white font-w5">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
