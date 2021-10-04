export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
 }
 
 export function splitTypeArray(arr){
     return arr.join(" and ");
 }
 
 export const WhatIsTheDate = () => {
    const getDate = new Date(Date.now());
    const todaysDate = getDate.toDateString();
    return <h4 className="date">Today's Date: {todaysDate}</h4>
}