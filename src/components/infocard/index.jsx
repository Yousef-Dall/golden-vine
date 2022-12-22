import React from 'react'
import "./style.css"

function Infocard(props) {
  return (
    <div class = "infocard">
        <img src={props.iclink} alt="" />
        <div>
            <p class = "icnum">{props.icnum}</p>
            <p class = "icdis">{props.icdis}</p>
        </div>
    </div>
  )
}

export default Infocard