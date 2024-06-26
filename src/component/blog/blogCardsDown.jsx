import React from "react";
import '../../index.css';

const BlogDown =({photo,textUp,text})=>{
return(
    <div className="blogDown">
        <img src={photo} alt="" />
        <h2>{textUp}</h2>
        <p>{text}</p>
    </div>
)
}
export default BlogDown;