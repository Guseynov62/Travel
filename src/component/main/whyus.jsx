import React from "react";
import '../../App.css';


const Why =({icon,text})=>{
 return(
    <div className="infrmtn">
        <div className="card">

           <button>{icon}</button>
           <p>{text}</p>
          
        </div>
    </div>
 )
}
export default Why;