import React, { useContext, useState } from "react";
import classes from "./filtrRadio.module.scss";
import { SearchRadioContext } from "../../context/SearchContext";

const FiltrRadio: React.FC = () => {
  const { selectRadio, setSelectRadio } = useContext(SearchRadioContext);
  const [selectOption, setSelectOptions] = useState("celsius");

  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectRadio(event.target.value);
  };
  return (
    <div className={classes.radio}>
      <form>
        <label>
          <input
            type="radio"
            value="celsius"
            checked={selectRadio === "celsius"}
            onChange={handleOptionChange}
          />
          <span>°C</span>
        </label>
        <label>
          <input
            type="radio"
            value="fahrenheit"
            checked={selectRadio === "fahrenheit"}
            onChange={handleOptionChange}
          />
          <span>°F</span>
        </label>
      </form>
    </div>
  );
};

export default FiltrRadio;
