import "./style.css"
import React from 'react'
import Readmore from "../read-more-button"
function Welcome() {
  return (
      <div class = "welcome">
        <p class = "wel">welcome to <br/>golden view dine</p>
        <p class = "exp">Explore the authentic vegan dishes with your friends and family</p>
        <Readmore rtext = "Read more"/>
      </div>

  )
}

export default Welcome