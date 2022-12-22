import React from 'react'
import "./style.css"

function Item({iname, idis, iprice, imig}) {
  return (
    <div class="item">
       <img src={imig} alt="" />
       <div>
       <p class = "item-name">{iname}</p>
       <p class = "item-dis">{idis}</p>
       </div>
       <hr class = "bbs"/>
       <p class = "price">{iprice}</p>
    </div>
  )
}

export default Item