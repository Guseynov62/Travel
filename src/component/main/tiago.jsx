import React from "react"
import '../../App.css';
import { MdNordicWalking } from "react-icons/md";

const Tiago =()=>{
return(
    <div className="tiago">
     <div className="up">
        <p>"Tiago put together an epic itinerary for me and my friends. He showed us some hidden hiking trails and amazing local food sports.
         He even met us for a coffee to make sure we had everthing we needed.</p>
        <p style={{color: "#4A1CE8 "}} >Thanks Tiago</p>
        <p> Charlie ; rappelling down a 370-foot waterfall</p>
        <p>The Azores</p>
     </div>
     <div className="down">
        <div className="btn">
            <p><MdNordicWalking/></p>
        </div>
        <div className="text">
            <p>Trip crafted by</p>
            <p>Tiago Local expert in Portugal</p>
        </div>
     </div>
    </div>
)
}
export default Tiago