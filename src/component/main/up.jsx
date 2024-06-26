import React from "react";
import '../../App.css';
import Logo from '../../assets/tourista.jpeg'
import { Link } from "react-router-dom";


const Up=()=>{
return(
    <div className="upSide">
        <div className="upLeft">
            <Link to={'/destination'} className="link"><h2>Destinations</h2></Link>
            <h2>Private trips</h2>
        </div>
        <div className="upMiddle">
          <Link to={'/'}>  <img src={Logo} alt="" /></Link>
        </div>
        <div className="upRight">
            <button className="leftBtn">I'm felling luckly</button>
           <Link to={'/login'}> <button className="rightBtn">Login</button></Link>
        </div>
    </div>
)
}
export default Up;