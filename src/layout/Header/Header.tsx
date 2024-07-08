import React from "react";
import classes from "./header.module.scss";
import Search from "../../components/Search/Search";
import FiltrRadio from "../../components/FiltrRadio/FiltrRadio";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div></div>
        <div>
          <Search />
        </div>
        <div>
          <FiltrRadio />
        </div>
      </div>
    </div>
  );
};

export default Header;
