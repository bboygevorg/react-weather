import React, { useEffect, useState } from "react";
import classes from "./homePage.module.scss";
import CurrentWheater from "../../components/Wheater/CurrentWeather/CurrentWheater";
import axios from "axios";
import DailiWeather from "../../components/Wheater/DailiWheater/DailiWeather";
import { useAppSelector, useAppDisptach } from "../../redux/store/hooks";
import { fetchWeatherData } from "../../redux/citySlice/citySlice";

const apiKey = process.env.API_KEY;

const HomePage: React.FC = () => {
  const [weatherDataState, setWeatherDataState] = useState(null);
  const [dailyWeather, setDailiWeather] = useState([]);
  const dispatch = useAppDisptach();

  const weatherData = useAppSelector((item) => item.city.weatherData);

  const currentWheater = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=aefed3b594c20588c1bdeae497bde77b`
      );
      setWeatherDataState(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const dailyWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&appid=aefed3b594c20588c1bdeae497bde77b`
      );
      setDailiWeather(response.data.list);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    if (!weatherDataState) {
      dispatch(fetchWeatherData("Yerevan"));
    }
    currentWheater();
    dailyWeatherData();
  }, [dispatch, weatherDataState]);

  return (
    <>
      <div>
        <div className={classes.container}>
          <div className={classes.Upper_block}>
            <CurrentWheater weatherData={weatherData} />
            <DailiWeather dailyWeather={dailyWeather} />
          </div>
          <div className={classes.bottom_block}>
            <div>3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
