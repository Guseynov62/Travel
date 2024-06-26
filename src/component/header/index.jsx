import React from "react";
import '../../App.css';
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";


const Header =()=>{
return(
    <div className="header">
      <div className="headerLeft">
        <ul>
            <Link to={'/about'} className="link"><li>About us</li></Link>
            <Link to={'/faq'} className="link"> <li>FAQ</li></Link>
            <Link to={'/blog'} className="link"> <li>Blog</li></Link>
            <Link to={'/contactUS'} className="link"><li>Contact us</li></Link>
        </ul>
      </div>
      <div className="headerRight">
        <ul>
            <li> US$ </li>
            <p><SlArrowDown/></p>
        </ul>
      </div>
    </div>
)
}
export default Header