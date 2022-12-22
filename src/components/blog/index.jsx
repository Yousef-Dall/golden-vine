import React from 'react'
import Readmoretxt from '../redmoretxt'
import "./style.css"

function Blog(props) {
  return (
    <div>
        <img src={props.bimg} alt="" />
        <p class = "btitle">{props.btitle}</p>
        <p class = "bdis">{props.bdis}</p>
        <Readmoretxt />
    
    </div>
  )
}

export default Blog