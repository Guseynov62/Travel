import React from "react";
import '../../App.css';
import '../contactUs/contact.css';
import Up from "../main/up";
import contact from'../../assets/contact/contact.png';
import Looking from "../main/looking";
import Join from "../main/join";
import { Link } from "react-router-dom";

const Contact = () => {
   return (
      <>
         <Up />
         <div className="contact">
            <img src={contact} alt=""  />
            <div className="containeR">
               <h1>Contact us</h1>
               <p>Blog articles for "Inspiration"</p>
            </div>
         </div>

         <div className="contenT">
            <div className="contentLeft">
               <h1>Commercial Contacts</h1>
            </div>
            <div className="contentRight">
               <div className="up">
                  <h1>Content Contact</h1>
                  <p>To report and issue to our content teams please contact:</p>
                  <Link to={'/login'}>  <a href="#">corrections@tourista.com</a></Link>
               </div>
               <div className="up">
                  <h1>Press Contact</h1>
                  <p>if you're a journalist / influencer with a press enquiry about Tourista</p>
                  <Link to={'/login'}>   <a href="#">pr@tourista.com</a></Link>
               </div>
               <div className="up">
                  <h1>Partnership Contact</h1>
                  <p>For partnership opportunities:</p>
                <Link to={'/login'}>  <a href="#">partnerships@tourista.com</a></Link>
               </div>
            </div>
         </div>

           <Looking/>
           <Join/>
      </>

   )
}
export default Contact