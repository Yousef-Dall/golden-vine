import React from 'react'
import "./style.css"

function Title(props) {
  return (
    <div class = "title">
        <p class = "ap">{props.title}</p>
        <p class= "di">{props.para}</p>
    </div>
  )
}

export default Title