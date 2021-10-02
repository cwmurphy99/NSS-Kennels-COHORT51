/*PROPS AND STATE JS FILE
import React, { useState } from "react"
import "./PropsAndState.css"
import { QuoteList } from "./quote/QuoteList"


export const PropsAndState = ({ yourName, day}) => {
  let [countClicks, setCountClicks] = useState(0)
  let [saveNow, setSaveNow] = useState(false) //-SAVE BUTTON STATE HANDLER
  let [colorIndex, setColorIndex] = useState(0) //-COLOR CHANGER STATE HANDLER


//************THIS IS FOR CHANGING COLORS OF A FIELD AND COUNTING CLICKS*************
  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }
  const allColors = ['red', 'blue', 'orange'];
    let newColorIndex = ++colorIndex;
    if (newColorIndex > allColors.length - 1) {
      newColorIndex = 0;
    }
    setColorIndex(newColorIndex);
  }
<p className={allColors[colorIndex]}>Holy shit, {countClicks} clicks?</p>
<button onClick={(handleClick)}>Show Random Quote</button> 
//***************************************************************************

//******************************THIS IS FOR A TEXT FIELD AND A SAVE BUTTON******************************
  const handleChange = (event) => {
    let newSaveNow = saveNow;
    newSaveNow = true;
    setSaveNow(newSaveNow);
  }
<div>
        <textarea style={{ width: '100%' }} type="text" name="notes" placeholder='notes' onChange={handleChange} />
        <button style={{ width: '100%' }} id="save" disabled={saveNow ? false : true} >Save Note</button>
      </div>
//*************************************************************************


  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>Today's Date: {day} </p>
      //put the text area and button here along with it's div to have a text field and save button
      <QuoteList />
    </>
  )
}
*/