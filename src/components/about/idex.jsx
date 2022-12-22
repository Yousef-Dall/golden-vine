// import React, { Children } from 'react'
import "./style.css"
import Readmore from '../read-more-button'
// import Title from '../titles'

function About({sec, link, Children}) {
    return (
        <div class = "about">
            <div class = "first">
                <div>
                    {Children}
                </div>
                <p class="lo">{sec}</p>
                <Readmore rtext = "Read more"/>
            </div>
            <div>
                <img src={link} alt="" />
            </div>
      
        </div>
  
    )
  }
  
  export default About