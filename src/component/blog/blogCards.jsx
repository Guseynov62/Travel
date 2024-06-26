import React from "react"
import '../../index.css'


const BlogCards=({photo,text,textUp})=>{
return(
    <div className="blogCard">
       <img src={photo} alt="" />
       <h2>{textUp}</h2>
       <p>{text}</p>
    </div>
)
}
export default BlogCards