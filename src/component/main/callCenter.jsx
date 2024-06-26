import React from "react";
import leftCall from '../../assets/leftCallcenter.png';
import rightCall from '../../assets/rightCallcenter.png';

const Callcenter =()=>{
return(
 <div className="callcnt">
    <img src={leftCall} alt="" />
    <img src={rightCall} alt="" className="down" />
 </div>
)
}
export default Callcenter;