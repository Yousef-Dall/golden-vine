import React from 'react'
import "./style.css"


function Card(props) {
    return (
        <div class = "card">
            <img src={props.clink} alt="" />
            <p class = "ctitle">{props.ctitle}</p>
            <p class = "cdisc">{props.cdisc}</p>
           
      
        </div>
  
    )
  }
  
  export default Card