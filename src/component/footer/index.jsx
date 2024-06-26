import React from "react";
import '../../App.css';
import Logo from '../../assets/tourstLogo.png'


const Footer =()=>{
return(
    <div className="footer">
        <div className="divOne">
            <img src={Logo} alt="" style={{width:'190px' ,height:'60px'}}/>
            <p>Discover the world's wonders and let us be your trusted guide to extraordianry destinations </p>
             <h2> © Copyright 2023 Tourista Ltd. All Rights Reserved</h2>
        </div>
        <div className="divS">
            <h1 style={{marginBottom:'20px'}}>Menu</h1>
            <p>Destinations</p>
            <p>Private trips</p>
            <p>Blog</p>
            <p>About us</p>
        </div>
        <div className="divS">
            <h1 style={{marginBottom:'20px'}}>Support</h1>
            <p>Contact us</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
        </div>
        <div className="divS">
            <h1 style={{marginBottom:'20px'}}>Follow us</h1>
            <p>Istangram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Tiktok</p>
        </div>

    </div>
)
}
export default Footer;