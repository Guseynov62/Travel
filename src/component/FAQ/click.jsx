import React, { useState } from "react"
import '../../index.css'

const Click =({number,text})=>{
    const [close,setClose]=useState('textTwo')
    const [btn,setBtn] =useState('+')

    const clickHandler =()=>{
        close === ('textTwo') ? setClose('texttwo') : setClose('textTwo');
        btn === ('+') ? setBtn('x') : setBtn('+')
    }
return(
    <div className="content">
        <div className="nmb">{number}</div>
        <div className="text">
            <div className="textOne">
               <h3> {text}</h3>
            </div>
            <div className={close}>
                <p>To discover budget-friendly accommodations, consider the following tips:
                    Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel
                    compadrison websites to find competitive prices from variouse providers. Off-Peak Travel:Consider traveling during of-peak seasons
                    for rudeces rates.Hostels and Guesthouse: These can ve more econimical than hotels,especially for solo travelers.Rewarts Programs: 
                    Sign up for loyalty rpograms to accumulate points and receive discounts. Local Recommendations : Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.
                </p>
            </div>
        </div>
        <button className="clickBtn" onClick={clickHandler}>{btn}</button>
    </div>
)
}
export default Click