import React from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Slider from "../Slider/Slider";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <NavbarMenu />
      <Slider />
    </header>
  );
};

export default Header;
