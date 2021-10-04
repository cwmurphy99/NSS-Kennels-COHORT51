import React, { useState, useEffect } from 'react';
//LET'S GET THE COMPONENTS WE WILL NEED
import { CustomerCard } from "./CustomerCard";
import { deleteCustomer, getAllCustomers } from "../../modules/CustomerManager";
import { useHistory } from 'react-router-dom';

export const CustomerList = () => {
    //INITIAL STATE IS AN EMPTY ARRAY
    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
        //AFTER THE DATA COMES BACK FROM THE API, WE USE
        //THE setCustomers FUNCTION TO UPDATE STATE
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

    const history = useHistory();

    const handleDeleteCustomer = id => {
        deleteCustomer(id)
            .then(() => getAllCustomers().then(setCustomers));
    };

    //OBTAINED THE CUSTOMERS FROM THE API ON THE FIRST RENDER
    useEffect(() => {
        getCustomers();
    }, []);

    //FINALLY WE USE .map() TO LOOP OVER THE CUSTOMERS ARRAY TO SHOW A LIST OF CUSTOMER CARDS
    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/customers/create") }}>
                    New Customer
                </button>
            </section>
            <div className="customer-cards">
                {customers.map(customer => <CustomerCard key={customer.id} customer={customer} handleDeleteCustomer={handleDeleteCustomer} />)}
            </div>
        </>
    );

};