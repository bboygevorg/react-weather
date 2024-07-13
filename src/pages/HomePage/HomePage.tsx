import React, { useContext, useEffect, useState } from "react";
import { SearchRadioContext } from "../../context/SearchContext";
import axios from "axios";
import CurrentLocation from "../../components/CurrentLocation/CurrentLocation";
import CurrentCity from "../../components/Wheater/CurrentCity/CurrentCity";
import classes from "./homePage.module.scss";
import WeekZone from "../../components/Wheater/WeekZone/WeekZone";
import TimeZone from "../../components/Wheater/TimeZone/TimeZone";

const HomePage = () => {
  const { searchQuery, selectRadio } = useContext(SearchRadioContext);
  const [cityLocation, setCityLocation] = useState<any>({});
  const [weekCityWeather, setWeekCityWeather] = useState<any>({});
  const [convertWeather, setConvertWeather] = useState<string | undefined>(
    undefined
  );
  const [dateFilter, setDateFilter] = useState("2024-07-14");

  const getConvert = () => {
    if (selectRadio === "celsius" && cityLocation && cityLocation.main) {
      const temperatureConvert = cityLocation.main.temp;
      const celsiusValue = (temperatureConvert - 273.15).toFixed();

      setConvertWeather(celsiusValue + "°C");
    } else {
      if (selectRadio === "fahrenheit" && cityLocation && cityLocation.main) {
        const temperatureConvert = cityLocation.main.temp;
        const fahrenheitValue = (
          ((temperatureConvert - 273.15) * 9) / 5 +
          32
        ).toFixed();

        setConvertWeather(fahrenheitValue + "°F");
      }
    }
  };

  const getWeekWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=f8b753704e7cacff52cb040b0ce5722d`
      );

      if (response.data && response.data.list) {
        const forecastList = response.data.list;

        const filteredData: { [date: string]: any[] } = {};

        forecastList.forEach(
          (forecastItem: { weather: any; main: any; dt_txt: string }) => {
            const date = forecastItem.dt_txt.split(" ")[0];
            const time = forecastItem.dt_txt.split(" ")[1];

            if (!filteredData[date]) {
              filteredData[date] = [];
            }

            filteredData[date].push({
              time: time,
              temperature: forecastItem.main.temp,
              icon: forecastItem.weather[0].icon,
            });
          }
        );

        setWeekCityWeather(filteredData);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const addDates = (date: string) => {
    setDateFilter(date);
  };

  const getCurrentCity = async () => {
    try {
      if (searchQuery) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=f8b753704e7cacff52cb040b0ce5722d`
        );
        setCityLocation(response.data);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getCurrentCity();
  }, [searchQuery]);

  useEffect(() => {
    getWeekWeather();
  }, [searchQuery]);

  useEffect(() => {
    getConvert();
  }, [cityLocation, selectRadio]);

  return (
    <div className={classes.container}>
      <CurrentLocation />
      <div className={classes.top_block}>
        <div>
          <CurrentCity
            citiLocation={cityLocation}
            convertWeather={convertWeather}
          />
          <TimeZone dateFilter={dateFilter} weekCityWeather={weekCityWeather} />
        </div>
      </div>
      <div className={classes.bottom_block}>
        <WeekZone
          weekCityWeather={weekCityWeather}
          convertWeather={convertWeather}
          addDates={addDates}
        />
      </div>
    </div>
  );
};

export default HomePage;
