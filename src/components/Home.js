import React, { useEffect, useState, } from "react";
import { PropsAndState } from './PropsAndState'
import { AnimalSpotlight } from "./animal/AnimalSpotlight";
import { getRandomId } from "../modules/AnimalManager";



const date = new Date();
let todaysDate = date.toDateString();
let theTime = date.toLocaleTimeString();

export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightAnimal = () => {
        getRandomId().then(setSpotlightId);
    };

    useEffect(() => {
        refreshSpotlightAnimal();
    }, []);
    


    return (

        <>
            <h2>Nashville Kennels</h2>

            <small>Loving care when you're not there.</small>

            <address>
                <div>Visit Us at the Nashville North Location</div>
                <div>500 Puppy Way</div>
            </address>

            <PropsAndState yourName={"Chris"} day={todaysDate} time={theTime} />

            <button className="spotlightButton" onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
            { spotlightId && <AnimalSpotlight animalId={spotlightId} /> }

        </>
    )
}