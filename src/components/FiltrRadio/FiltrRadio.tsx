import React, { useState } from "react";
import classes from "./filtrRadio.module.scss";

const FiltrRadio: React.FC = () => {
  const [selectOptions, setSelectOptons] = useState("celsius");

  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectOptons(event.target.value);
  };
  return (
    <div className={classes.radio}>
      <form>
        <label>
          <input
            type="radio"
            value="celsius"
            checked={selectOptions === "celsius"}
            onChange={handleOptionChange}
          />
          <span>°C</span>
        </label>
        <label>
          <input
            type="radio"
            value="fahrenheit"
            checked={selectOptions === "fahrenheit"}
            onChange={handleOptionChange}
          />
          <span>°F</span>
        </label>
      </form>
    </div>
  );
};

export default FiltrRadio;
