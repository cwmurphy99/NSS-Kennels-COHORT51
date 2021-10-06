import React, { useState } from "react"
import "./PropsAndState.css"
import { QuoteList } from "./quote/QuoteList"

const GetUser = () => {
  let user = sessionStorage.getItem("name");
  console.log(user);
}

GetUser();



export const PropsAndState = ({ yourName, day}) => {
  let [countClicks, setCountClicks] = useState(0)
 
  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>Today's Date: {day} </p>
      <button onClick={(handleClick)}>Show Random Quote</button>
      <QuoteList />
    </>
  )
}