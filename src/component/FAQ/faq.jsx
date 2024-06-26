import React from "react";
import Up from "../main/up";
import faq from '../../assets/fag/fagbg.jpeg'
import Click from "./click";

const Faq = () => {
    return (
        <>
            <Up />
            <div className="faq">
                <img src={faq} alt="" />
                <div className="container">
                    <h1>FAQ</h1>
                    <p>Unlocking the Mystries of Travel : Your Questions , Our Journey.</p>
                </div>
            </div>
            <Click number='01' text=' What are the best tips for finding budget - friendly travel accomadations?'/>
            <Click number='02' text='How can l find authentic local experiences when traveling'/>
            <Click number='03' text='What l should  pack for a long-term trip or backpacking adventure'/>
            <Click number='04' text='What are some strategies for overcoming jet lag when traveling across time zones'/>
            <Click number='05' text='What are the visa requirements for popular tourist destinations '/>
        </>
    )
}
export default Faq;