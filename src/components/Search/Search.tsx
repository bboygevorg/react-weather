import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../../redux/citySlice/citySlice";
import { useAppDisptach } from "../../redux/store/hooks";

const Search = () => {
  const [searchCity, setSearchCity] = useState("");
  const dispatch = useAppDisptach();

  const handleSearch = () => {
    dispatch(fetchWeatherData(searchCity));
  };

  return (
    <div>
      <input
        type="text"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button onClick={handleSearch}>SearchCity</button>
    </div>
  );
};

export default Search;
