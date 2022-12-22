import "./style.css"
import React from 'react'
import {FaSearch} from 'react-icons/fa';
import Logo from "../logo";



function Menu() {
  return (
    <div class = "menu">
      <Logo />
      
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Special</a>
        <a href="#">Menu</a>
        <a href="#">Blogs</a>

      <FaSearch class = "icon"/>
      {/* <div class = "btn-con"><hr /> */}
      <button class = "btn"><hr class = "bs" /> book now <hr class = "bs" /></button>
      {/* <hr /></div> */}
   
      </div>
    // <FaHome/>
    
  )
}


export default Menu
