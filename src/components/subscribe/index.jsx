import React from 'react'
import Readmore from '../read-more-button'
import "./style.css"

function Sub() {
  return (
    <div class = "sup">
        <div>
            <div class = "sub">
                <img src="./imgs/Vector (6).png" alt="" />
                <p class = "cinfo">Subscribe to our Newsletter</p>
            </div>
        </div>
        <input className='inn' placeholder='Your Email id' type="text" />
        <Readmore rtext = "Subscribe" />


    </div>
  )
}

export default Sub