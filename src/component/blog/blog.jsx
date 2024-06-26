import React from "react";
import '../../index.css';
import Up from "../main/up";
import blog from '../../assets/blog/blogbg.jpeg';
import Looking from "../main/looking";
import Join from "../main/join";
import BlogCards from "./blogCards";
import Blog4 from '../../assets/blog/image4.png';
import Blog5 from '../../assets/blog/image5.png';
import Blog1 from '../../assets/blog/image1.png';
import Blog2 from '../../assets/blog/image2.png';
import Blog3 from '../../assets/blog/image3.png';
import BlogDown from "./blogCardsDown";


const Blog = () => {
    return (
        <>
            <Up />

            <div className="about">
                <img src={blog} alt="" />
                <div className="container">
                    <h1>BLOG</h1>
                    <p>Blog articles for "Inspiration"</p>
                </div>
            </div>

            <div className="blogBtn">
                <button>All Article</button>
                <button>Food & Drink</button>
                <button>Inspiration</button>
                <button>Local Guides</button>
                <button>See & Do</button>
                <button>Travel Tips</button>
                <button>Where to stay</button>
            </div>

            <div className="blogCards">
                <BlogCards textUp='Food & Drink' photo={Blog4} text ="Founded by Pope Julius ll in the early 16th century and enlarged by succesive pontiffs, the Vatican Museums boast one of the World's greatest art.."/>
                <BlogCards textUp='See & Do' photo ={Blog5} text ="Founded by Pope Julius ll in the early 16th century and enlarged by succesive pontiffs, the Vatican Museums boast one of the World's greatest art.." />
            </div>

            <div className="blogCardsDown">
                <BlogDown photo={Blog1} textUp="Inspiration" text="Founded by Pope Julius ll in the early 16th century and enlarged by succesive pontiffs, the Vatican Museums boast one of the World's greatest art.."/>
                <BlogDown photo={Blog2}  textUp="Travel Tips" text="Everyone wants to see the Colosseum, and it doesn't disappoint , especially if accompanied by tales of armored gladiators and hungry lions. More..."/>
                <BlogDown  photo={Blog3}  textUp="Food & Drink" text="In the city of outstanding churches , none can hold a candle to St Peter's , Italy largest richest and most spectacular basilica. Built atop a 4th.."/>
            </div>
            <Looking/>
            <Join/>
        </>


    )
}
export default Blog