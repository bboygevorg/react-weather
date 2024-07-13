import React, { useContext } from "react";
import classes from "./currentCity.module.scss";

interface CurrentCityProps {
  citiLocation: CurrentCity;
  convertWeather: string | undefined;
}

interface CurrentCity {
  weather: any;
  name: string;
  description: string;
  icon: string;
  main: string;
}
const CurrentCity: React.FC<CurrentCityProps> = ({
  citiLocation,
  convertWeather,
}) => {
  return (
    <div className={classes.current_city}>
      <span>{citiLocation.name}</span>
      <span>{convertWeather}</span>
      <div className={classes.img}>
        <img
          src={
            citiLocation &&
            citiLocation.weather &&
            citiLocation.weather.length > 0
              ? `https://openweathermap.org/img/wn/${citiLocation.weather[0].icon}@4x.png`
              : ""
          }
          alt=""
        />
      </div>
      <span>
        {citiLocation &&
          citiLocation.weather &&
          citiLocation.weather.length > 0 &&
          citiLocation.weather[0].main}
      </span>
    </div>
  );
};

export default CurrentCity;