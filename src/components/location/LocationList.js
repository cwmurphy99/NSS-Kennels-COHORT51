import React, { useState, useEffect } from 'react';
//IMPORT ALL OF THE COMPONENTS THAT WE WILL NEED
import { LocationCard } from './LocationCard';
import { getAllLocations } from '../../modules/LocationManager';

export const LocationList = () => {
//STATE IS INITIALLY SET AS AN EMPTY ARRAY
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
//AFTER THE DATA COMES BACK FROM THE API, WE USE THE setLocations FUNCTION TO UPDATE STATE
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

//GET THE ANIMALS FROM THE API ON THE COMPONENT'S FIRST RENDER
    useEffect(() => {
        getLocations();
    }, []);

//USE .map() TO LOOP OVER THE LOCATIONS ARRAY TO SHOW A LIST OF LOCATION CARDS
    return (
        <div className="location-cards">
            {locations.map(location => <LocationCard key={location.id} location={location} />)}
        </div>
    );
};