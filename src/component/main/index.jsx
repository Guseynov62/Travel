import React from "react";
import '../../App.css';
import Up from "./up";
import Video from "./video";
import MiddleUp from "./middleUp";
// imgs......
import Madrid from '../../assets/cards/image1.jpeg'
import Sicily from '../../assets/cards/image2.jpeg'
import Istanbul from '../../assets/cards/image3.jpeg'
import madrid from '../../assets/cards/image4.jpeg'
import sicily from '../../assets/cards/image5.png'
import istanbul from '../../assets/cards/image6.jpeg'
// imgs......
import Why from "./whyus";
// icons.......
import { FaMapLocationDot } from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
// icons.......
import Tiago from "./tiago";
// imgs.......
import MaDrid from '../../assets/cards/image7.jpeg'
import SiCily from '../../assets/cards/image8.jpeg'
import IsTanbul from '../../assets/cards/image9.jpeg'
// imgs .......
import Looking from "./looking";
import Join from "./join";
import Callcenter from "./callCenter";
import Cards from "./cards";

const Main = () => {
    return (
        <div className="main">
            <Up/>
            <Video/>
            <MiddleUp information='Trending now'/>
           <section>
            <Cards price='$1299.00' days='12' location ='Magical Madrid To Marakkesh by Train' img={Madrid}/>
            <Cards price='$250.00' days='5' location ='Spectacular Sicily' img={Sicily}/>
            <Cards price='$400' days ='7' location ='International Istanbul' img={Istanbul}/>
           </section>
           <MiddleUp information='Brand new trips'/>
           <section>
            <Cards price='$1299.00' days='12' location ='Magical Madrid To Marakkesh by Train' img={madrid}/>
            <Cards price='$250.00' days='5' location ='Spectacular Sicily' img={sicily}/>
            <Cards price='$400' days ='7' location ='International Istanbul' img={istanbul}/>
           </section>
           <MiddleUp information='Why us?'/>
           <main>
            <Why icon={<FaMapLocationDot/>} text='More than 149 travel title currently in print'/>
            <Why icon={ <LuBaggageClaim/>} text='Supporting millions of travellers since 1982'/>
            <Why icon ={ < BiSupport/>} text='Our utstanting customer satisfaction'/>
           </main>
           <MiddleUp information='Our Local Experts'/>
           <Callcenter/>
           <Tiago/>
           <MiddleUp information='Europa'/>
           <section>
            <Cards price='$1299.00' days='12' location ='Magical Madrid To Marakkesh by Train' img={MaDrid}/>
            <Cards price='$250.00' days='5' location ='Spectacular Sicily' img={SiCily}/>
            <Cards price='$400' days ='7' location ='International Istanbul' img={IsTanbul}/>
           </section>
           <MiddleUp information='Brand new trips'/>
           <section>
            <Cards price='$1299.00' days='12' location ='Magical Madrid To Marakkesh by Train' img={Madrid}/>
            <Cards price='$250.00' days='5' location ='Spectacular Sicily' img={Sicily}/>
            <Cards price='$300' days ='7' location ='International Istanbul' img={Istanbul}/>
           </section>
           <Looking/>
            <Join/>
        </div>
    )
}
export default Main;