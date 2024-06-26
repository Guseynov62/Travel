import React, { useState } from "react";
import '../login/login.css'
import Plane from '../../assets/signin-bg.png'
import Logo from '../../assets/tourstLogo.png'
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
    const [click, setClick] = useState('password')
    const [color,setColor] =useState('icon')
    const clickHandler = () => {
        click === ('password') ? setClick('text') : setClick('password');
        color === ('icon') ? setColor('iconClick') : setColor('icon')
    }
    return (
        <div className="login">
            <div className="loginLeft">
                <img src={Plane} alt="Plane" />
            </div>

            <div className="loginRight">
                <div className="logo">
                    <Link to={'/'}> <p><IoChevronBackSharp /></p></Link>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="info">
                    <h1>Sign in for your exciting  journey</h1>
                </div>
                <form >
                    <div className="inputOne">
                        <p>Email:</p>
                        <input type="text" name="text" id="text" placeholder="someone@example.com" />
                    </div>

                    <div className="inputTwo">
                        <p>Password</p>
                        <input type={click} name="password" id="password" placeholder="*******" />
                        <span className={color} onClick={clickHandler}><IoEyeOffOutline /></span>
                    </div>

                </form>
                <div className="forgot">
                   <Link to={'/forgot'}> <p>Forgot password?</p></Link>
                </div>
                <div className="singIn">
                    <button>Sign in</button>
                    <p>or use one of this</p>

                </div>

                <div className="btns">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

                <div className="account">
                    <p>Don't have an account?</p>
                    <p style={{ color: '#8A75D3' }}>Create one for new adventure!</p>
                </div>
            </div>
        </div>
    )
}
export default Login;