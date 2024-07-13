import React, { useContext } from "react";
import classes from "./timeZone.module.scss";
import { SearchRadioContext } from "../../../context/SearchContext";

interface Time {
  dateFilter: string;
  weekCityWeather: {
    [date: string]: {
      date: string;
      time: string;
      temperature: string;
      icon: string;
    }[];
  };
}

const TimeZone: React.FC<Time> = ({ dateFilter, weekCityWeather }) => {
  const { selectRadio } = useContext(SearchRadioContext);
  const filteredWeather = weekCityWeather[dateFilter] || [];

  const getConvertedTemperature = (temperature: string) => {
    if (selectRadio === "celsius") {
      const celsiusValue = (parseFloat(temperature) - 273.15).toFixed();
      return celsiusValue + "°C";
    } else if (selectRadio === "fahrenheit") {
      const fahrenheitValue = (
        ((parseFloat(temperature) - 273.15) * 9) / 5 +
        32
      ).toFixed();
      return fahrenheitValue + "°F";
    }
    return "";
  };

  return (
    <>
      <div className={classes.time_zone}>
        {filteredWeather.slice(0, 8).map((weatherDate, index) => (
          <>
            <div key={index} className={classes.filter}>
              <span style={{ fontSize: "1.2rem" }}>{weatherDate.time}</span>
              <span style={{ fontSize: "1.2rem" }}>
                {getConvertedTemperature(weatherDate.temperature)}
              </span>
              <div className={classes.img}>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherDate.icon}@4x.png`}
                  alt=""
                />
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </>
  );
};

export default TimeZone;
