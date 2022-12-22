import React from 'react'
import Logo from '../logo'
import "./style.css"

function Footer() {
  return (
    <div class = "footer">
        <div class = "fst">
            <div>
            <Logo />
            <p class = "name">Golden View Dine </p>
            </div>
            <p class = "txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin</p>
            <div>
                <img src="./imgs/Social Icons.png" alt="" />
                <img src="./imgs/Social Icons (1).png" alt="" />
                <img src="./imgs/Social Icons (2).png" alt="" />

            </div>
        </div>
        <div class = "snd">
            <p class = "linkss">Other links</p>
            <ul>
                <li><a class = "others" href="#">Privacy Policy</a></li>
                <li><a class = "others" href="#">Terms & conditions</a></li>
                <li><a class = "others" href="#">Blogs</a></li>
                <li><a class = "others" href="#">our team</a></li>
                <li><a class = "others" href="#">Our kitchen</a></li>

            </ul>

        </div>
        <div class = "thrd">
            <p class = "linkss">Contact us</p>
            <div>
                <img src="./imgs/Vector (3).png" alt="" />
                <p class = "cinfo">Gogreendineservice@gmail.com</p>
            </div>
            <div>
                <img src="./imgs/Vector (4).png" alt="" />
                <p class = "cinfo">AZ complex bylane3 Mandari Rd Mumbai 1100867 </p>
            </div>
            <div>
                <img src="./imgs/Vector (5).png" alt="" />
                <p class = "cinfo">+1800 287 256</p>
            </div>

        </div>
    </div>
  )
}

export default Footer