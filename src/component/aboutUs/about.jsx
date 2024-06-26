import React from "react";
import '../../index.css';
import Up from "../main/up";
import about from '../../assets/about/aboutbg.jpeg'
import MiddleUp from "../main/middleUp";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import Why from "../main/whyus";
import Callcenter from "../main/callCenter";
import Looking from "../main/looking";
import Join from "../main/join";

const About = () => {
    return (
        <>
            <Up />
            <div className="about">
                <img src={about} alt="" />
                <div className="container">
                    <h1>About us</h1>
                    <p>Trips you couldn't plan,even if you wanted to</p>
                </div>
            </div>
            <MiddleUp information='Changing how the world travels' />
            <div className="about-text">
                <span>We're on a journey to transform ordinary trips into extraordinary ones. We are your guide, bringing you personal
                    experiences.Whereever your travels take you, we'll show you the unique and unmissable things to do in your destination.
                           With GetYourGuide on your side ( and in your pocket) , creating memorable moments has never beeen easier.
                        Today, millions have used
                       GetYourGuide to turn their travel dreams into reality. And we're just getting started. We're changing the way
                    people connect to the
                    places thet visit so anyone can create their dream vacation. it's your journey,your way.
                </span>
            </div>
            <MiddleUp information='Why US?' />
            <main>
            <Why icon={<FaMapLocationDot/>} text='More than 149 travel title currently in print'/>
            <Why icon={ <LuBaggageClaim/>} text='Supporting millions of travellers since 1982'/>
            <Why icon ={ < BiSupport/>} text='Our utstanting customer satisfaction'/>
           </main>
           <MiddleUp information='Our Local Experts' />
           <Callcenter/>
           <Looking/>
           <Join/>
        </>
    )
}
export default About;