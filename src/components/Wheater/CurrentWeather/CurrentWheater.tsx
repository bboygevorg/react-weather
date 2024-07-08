import React from "react";
import classes from "./currentWheater.module.scss";

interface weather {
  weatherData: any;
}
const CurrentWheater: React.FC<weather> = ({ weatherData }) => {
  const temperatureConvert = weatherData?.main.temp;
  const celsius = (temperatureConvert - 273.15).toFixed();

  return (
    <div className={classes.container}>
      {weatherData && (
        <>
          <span>{weatherData.name}</span>
          <span>{celsius + "°C"}</span>
          <div className={classes.img}>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>

          <span>{weatherData.weather[0].main}</span>
        </>
      )}
    </div>
  );
};

export default CurrentWheater;
