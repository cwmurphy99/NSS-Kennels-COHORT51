import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { addLocation } from "../../modules/LocationManager";
import { getAllAnimals } from "../../modules/AnimalManager";
import { getAllCustomers } from "../../modules/CustomerManager";
import './LocationForm.css'

export const LocationForm = () => {
    const [location, setLocation] = useState({
        name: "",
        address: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [animals, setAnimals] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
        const newLocation = { ...location }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers.
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        /* Customer is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newLocation[event.target.id] = selectedVal
        // update state
        setLocation(newLocation)
    }

    useEffect(() => {
        getAllCustomers().then(response => {
            setCustomers(response)
        })
    }, []);

    useEffect(() => {
        getAllAnimals().then(response => {
            setAnimals(response)
        })
    }, []);

    const handleClickSaveLocation = (event) => {
        event.preventDefault()

        const addressId = location.addressId
        if (addressId === 0) {
            window.alert("Please add an address")
        } else {
            addLocation(location)
                .then(() => history.push("/locations"))
        }
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Location Address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required className="form-control" placeholder="Location address" value={location.address} />
                </div>
            </fieldset>
            {/*  <fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={customer.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			 <fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Customer: </label>
					<select value={customer.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset> */}
            <button className="btn btn-primary"
                onClick={handleClickSaveLocation}>
                Save Location
            </button>
        </form>
    )
};