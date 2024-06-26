import React from "react";
import '../../App.css';


const Cards = ({ price, location,img,days,inf }) => {
    return (
     <div className="cards">
        

        <div className="top">
           
            <img src={img} alt="" />
        </div>
        <div className="btm">
            <div className="loc">
                <h3>{location}</h3>
            </div>
            <div className="price">
                <p>{days} days {inf} </p>
                <p>From {price}</p>
            </div>
        </div>
     </div>

    )
}
export default Cards;