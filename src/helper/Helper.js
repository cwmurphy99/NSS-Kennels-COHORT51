export const WhatIsTheDate = () => {
    const getDate = new Date(Date.now());
    const todaysDate = getDate.toDateString();
    return <h4 className="date">Today's Date: {todaysDate}</h4>
}