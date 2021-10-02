import React, { useState } from "react"
import "./PropsAndState.css"
import { WhatIsTheDate } from "../helper/Helper"
import { QuoteList } from "./quote/QuoteList"


export const PropsAndState = ({ yourName, day}) => {
  let [countClicks, setCountClicks] = useState(0)
  //let [saveNow, setSaveNow] = useState(false)
  let [colorIndex, setColorIndex] = useState(0)

  const allColors = ['red', 'blue', 'orange'];
  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
    
    let newColorIndex = ++colorIndex;
    if (newColorIndex > allColors.length - 1) {
      newColorIndex = 0;
    }
    setColorIndex(newColorIndex);
  }

  // const handleChange = (event) => {
  //   let newSaveNow = saveNow;
  //   newSaveNow = true;
  //   setSaveNow(newSaveNow);
  // }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <WhatIsTheDate />
      {/* <p className={allColors[colorIndex]}>Holy shit, {countClicks} clicks?</p> */}
      
      <button onClick={(handleClick)}>Show Random Quote</button>
      <QuoteList />
      {/* <div>
        <textarea style={{ width: '100%' }} type="text" name="notes" placeholder='notes' onChange={handleChange} />
        <button style={{ width: '100%' }} id="save" disabled={saveNow ? false : true} >Save Note</button>
      </div> */}

      
    </>
  )
}