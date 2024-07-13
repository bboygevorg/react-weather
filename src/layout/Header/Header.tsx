import React from "react";
import classes from "./header.module.scss";
import Search from "../../components/Search/Search";
import FiltrRadio from "../../components/FiltrRadio/FiltrRadio";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Search />
        <FiltrRadio />
      </div>
    </div>
  );
};

export default Header;
