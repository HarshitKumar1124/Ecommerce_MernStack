import React from 'react';
import {ReactNavbar} from "overlay-navbar"
import logo from "../logo192.png"





const Header = () => {
  return (
    <ReactNavbar 
    burgerColor="grey"
    burgerColorHover="black"
    navColor1 = "red"
    navColor2 = "greenyellow"
    navColor3 = "dodgerblue"
    navColor4 = "yellow"
    logo={logo}
    logoWidth="10%"
    logoHeight="30%"
    logoHoverSize="100px"
    logoHoverColor="black"
    logoTransition="1000"
    logoAnimationTime="1"
    />
  )
}

export default Header