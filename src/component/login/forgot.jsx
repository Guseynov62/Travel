import React from "react";
import '../login/login.css';
import Plane from '../../assets/signin-bg.png';
import Logo from '../../assets/tourstLogo.png';
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Forgot = () => {
    return (
        <div className="login">
            <div className="loginLeft">
                <img src={Plane} alt="Plane" />
            </div>

            <div className="loginRight">
                <div className="logo">
                <Link to={'/login'}> <p><IoChevronBackSharp /></p></Link>
                    <img src={Logo} alt="logo" />
                </div>

                <div className="forgotDown">
                    <div className="infrmtn">
                        <h1>Looking to change your password ?</h1>
                        <p>Enter your Email below and we'll send you instructions on how to <br /> reset your password</p>
                    </div>
                    <div className="emailInput">
                        <p>Email</p>
                        <input type="text" name="text" id="text" placeholder="someone@gmail.com"/>
                    </div>
                    <button className="reset">Reset my Password</button>
                </div>
            </div>

        </div>
        )
}
export default Forgot