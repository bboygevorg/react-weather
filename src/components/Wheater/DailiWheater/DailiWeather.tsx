import React from "react";
import classes from "./dailiWeather.module.scss";

interface DailiWeather {
  dailyWeather: any;
}

const DailiWeather: React.FC<DailiWeather> = ({ dailyWeather }) => {
  const convertToCelsius = (temperature: number) => {
    return (temperature - 273.15).toFixed(1);
  };

  return (
    <div className={classes.container}>
      {dailyWeather?.map((item: any, index: any) => (
        <React.Fragment key={index}>
          <span>{item.dt_txt}</span>
          <p>{convertToCelsius(item.main.temp)} °C</p>
          <div className={classes.img}>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default DailiWeather;
