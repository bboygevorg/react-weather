import React, { useContext, useState } from "react";
import classes from "./weekZone.module.scss";
import { SearchRadioContext } from "../../../context/SearchContext";

interface WeekCity {
  weekCityWeather: {
    [date: string]: { time: string; temperature: string; icon: string }[];
  };
  convertWeather: string | undefined;
  addDates: (date: string) => void;
}

const WeekZone: React.FC<WeekCity> = ({ weekCityWeather, addDates }) => {
  const { selectRadio } = useContext(SearchRadioContext);
  const [active, setActive] = useState<number>(0);
  const dates = Object.keys(weekCityWeather);

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
  };

  const handleElementClick = (index: number) => {
    setActive(index === active ? 0 : index);
  };

  const handleDateClick = (date: string) => {
    addDates(date);
  };

  const handleClick = (index: number, date: string) => {
    handleElementClick(index);
    handleDateClick(date);
  };

  return (
    <div className={classes.week_zone}>
      {dates.slice(0, 5).map((date, index) => (
        <div
          key={date}
          className={
            index === active ? classes.one_element_shadow : classes.one_element
          }
          onClick={() => handleClick(index, date)}
        >
          <h2>{date}</h2>
          <div>
            <span>
              {getConvertedTemperature(weekCityWeather[date][0].temperature)}
            </span>
            <div className={classes.img}>
              <img
                src={`https://openweathermap.org/img/wn/${weekCityWeather[date][0].icon}@4x.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekZone;
