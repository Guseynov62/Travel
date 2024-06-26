import React from "react"
import logoVde from '../../assets/video.mp4'
import { FaSearch } from "react-icons/fa";

const Video =()=>{
return(
    <div className="video">
       <video src={logoVde}  autoPlay loop muted className="videoMP4"/>
       <div className="container">
            <h1>We create trips you love </h1>
            <p>Trips you coudn't plan , even if you wanted to</p>
            <input type="text" name="text" id="text" placeholder="         Where do you want to go?" />
            <span> <FaSearch /> </span>
        </div>
      
    </div>
)
}
export default Video