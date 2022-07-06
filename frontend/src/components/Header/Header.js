import React from 'react';

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
    

 
    </>
  )
}

export default Header