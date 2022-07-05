import React from 'react';
import {ReactNavbar} from "overlay-navbar"
import logo from "../../logo192.png"
import {BiSearch} from "react-icons/bi"
import {BsFillCartCheckFill} from "react-icons/bs"
import {AiFillProfile} from "react-icons/ai"
import './Header.css'
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <>
    <div className="General_Icon_Bar">
      <ul>
        <Link  tag="a" title='View Profile' to='/profile'><li><AiFillProfile style={{fontSize:"2.0vmax"}}/></li></Link>
        <Link tag="a" title='Search Product'  to='/search'><li><BiSearch style={{fontSize:"2.0vmax"}}/></li></Link>
        <Link tag="a" title='View Cart'  to='/cart'><li><BsFillCartCheckFill style={{fontSize:"2.0vmax"}}/></li></Link>
      </ul>
    </div>
    <ReactNavbar 
    burgerColor="black"
    logo={logo}
    logoWidth="20vmax"
    navColor1="rgba(255,255,255)"
    logoHoverSize="10px"
    logoHoverColor="#eb4034"
    link1Text = "Home"
    link2Text="Product"
    link3Text="Contact"
    link4Text="About"
    link1Url="/"
    link2Url="/products"
    link3Url="/contact"
    link4Url="/about"
    link1Family="Quantico"
    

    link1Size="1.3vmax"
    link1Color="rgba(35,35,35,.8)"
    nav1justifyContent="flex-end"
    nav2justifyContent="flex-end"
    nav3justifyContent="flex-start"
   

    link1ColorHover = "#eb4034"
    link1Margin="1vmax"

    ProfileIconElement={<AiFillProfile/>}
    SearchIconElement={<BiSearch/>}
    CartIconElement={<BsFillCartCheckFill/>}
    



    profileIconColor="black"
    searchIconColor="rgba(35,35,35,0.8)"
    cartColorIcon="rgba(35,35,35,0.8)"

    profileIconColorHover="#eb4034"
    searchIconColorHover="#eb4034"
    cartIconColornHover="#eb4034"
    carIconMargin="1vmax"

    
    />

 
    </>
  )
}

export default Header