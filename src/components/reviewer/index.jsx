import React from 'react'
import Star from '../star'
import "./style.css"

function Reviewer(props) {
  return (
    <div class = "reviewer">
        <div> 
            <img src={props.reviewerimg} alt="" />
            <div>
                <p>{props.reviewername}</p>
                <div class = "stars">
                <Star /><Star /><Star /><Star />  
                </div>
            </div>
        </div>
        <p>{props.reviewtext}</p>
    </div>
  )
}

export default Reviewer