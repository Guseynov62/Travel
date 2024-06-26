import React from "react";
import '../../App.css';
import '../../index.css'
import Up from "../main/up";
import Italy from '../../assets/italy.gif'
import MiddleUp from "../main/middleUp";
// img....
import Spain from '../../assets/destinationcards/image1.jpeg'
import Portugal from '../../assets/destinationcards/image2.jpeg'
import Turkiye from '../../assets/destinationcards/image3.jpeg'
// img....
import Iceland from '../../assets/destinationcards/image4.png'
import Costa from '../../assets/destinationcards/image5.jpeg'
import Argentina from '../../assets/destinationcards/image6.jpeg'
// img....
import Cards from "../main/cards";
import Join from "../main/join";
import { MdNordicWalking } from "react-icons/md";

const Destinations = () => {
    return (
        <>
            <Up />
            <div className="video">
                <img src={Italy} alt="" />
                <div className="container">
                    <h1>Explore places on Tourista </h1>
                    <p>Destination</p>
                </div>
            </div>

            <div className="countrs">
                <div className="Europe">
                    <h2>Europe</h2>
                    <p>Azores</p>
                    <p>Croatia</p>
                    <p>Georgia</p>
                    <p>Germany</p>
                    <p>Greece</p>
                    <p>Iceland</p>
                    <p>Ireland</p>
                    <p>Italy</p>
                    <p>Portugal</p>
                    <p>Spain</p>
                </div>
                <div className="Europe">
                    <h2>Asia</h2>
                    <p>Azores</p>
                    <p>Croatia</p>
                    <p>Georgia</p>
                    <p>Germany</p>
                    <p>Greece</p>
                    <p>Iceland</p>
                    <p>Ireland</p>
                    <p>Italy</p>
                    <p>Portugal</p>
                    <p>Germany</p>
                </div>
                <div className="Europe">
                    <h2>Africa</h2>
                    <p>Azores</p>
                    <p>Croatia</p>
                    <p>Georgia</p>
                    <p>Germany</p>
                    <p>Greece</p>
                    <p>Iceland</p>
                    <p>Ireland</p>
                    <p>Italy</p>
                    <p>Portugal</p>
                    <p>Spain</p>
                </div>
                <div className="Europe">
                    <h2>C/Amerika</h2>
                    <p>Azerbaijan</p>
                    <p>Croatia</p>
                    <p>Georgia</p>
                    <p>Germany</p>
                    <p>Greece</p>
                    <p>Iceland</p>
                    <p>Ireland</p>
                    <p>Italy</p>
                    <p>Portugal</p>
                    <p>Poland</p>
                </div>
                <div className="Europe">
                    <h2>S/Amerika</h2>
                    <p>Turkey</p>
                    <p>Croatia</p>
                    <p>Georgia</p>
                    <p>Germany</p>
                    <p>Greece</p>
                    <p>Iceland</p>
                    <p>Ireland</p>
                    <p>Italy</p>
                    <p>Portugal</p>
                    <p>Azerbaijan</p>
                </div>


            </div>

            <MiddleUp information='Top Destinations' />

            <section>
                <Cards price='$199.00'  days='34' location='International Italy' img={Spain} />
                <Cards price='$250.00' days='54' location='International Portugal' img={Portugal} />
                <Cards price='$400' days='19' location='International Turkiye' img={Turkiye} />
            </section>

            <section>
                <Cards price='$299.00' days='105' location='Magical Madrid To Marakkesh by Train' img={Iceland} />
                <Cards price='$250.00' days='23' location='Spectacular Sicily' img={Costa} />
                <Cards price='$400' days='87' location='International Istanbul' img={Argentina} />
            </section>

            <div className="tiagoTwo">
                <div className="up">
                    <p>"Tiago put together an epic itinerary for me and my friends. He showed us some hidden hiking trails and amazing local food sports.
                        He even met us for a coffee to make sure we had everthing we needed.</p>
                    <p style={{ color: "#4A1CE8 " }} >Thanks Tiago</p>
                    <p> Charlie ; rappelling down a 370-foot waterfall</p>
                    <p>The Azores</p>
                </div>
                <div className="down">
                    <div className="btn">
                        <p><MdNordicWalking /></p>
                    </div>
                    <div className="text">
                        <p>Trip crafted by</p>
                        <p>Tiago Local expert in Portugal</p>
                    </div>
                </div>
            </div>

            <Join />
        </>
    )
}
export default Destinations;