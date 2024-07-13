import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchRadioContext } from "../../context/SearchContext";

const CurrentLocation: React.FC = () => {
  const { setSearchQuery } = useContext(SearchRadioContext);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation !== null) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.log("Error getting geolocation", error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const fetchCityData = async () => {
      if (latitude !== null && longitude !== null) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f8b753704e7cacff52cb040b0ce5722d`
          );
          setSearchQuery(response.data.name);
        } catch (error) {
          console.error("Error fetching city data:", error);
        }
      }
    };

    if (latitude !== null && longitude !== null) {
      fetchCityData();
    }
  }, [latitude, longitude]);

  return <div></div>;
};

export default CurrentLocation;
