import React, { useState, useEffect } from 'react';
import { deleteCustomer, getCustomerById } from "../../modules/CustomerManager"
import './CustomerDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "", location: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { customerId } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    setIsLoading(true);
    deleteCustomer(customerId).then(() =>
      history.push("/customer")
    );
  };

  const handleBack = () => {
    history.push("/customer");
  }

  useEffect(() => {
    //getCustomerById(id) from CustomerManager and hang on to the data; put it into state
    //console.log("useEffect", customerId)
    getCustomerById(customerId)
      .then(customer => {
        setCustomer({
          name: customer.name,
          address: customer.address,
          location: customer.location.name,
        });
      });
  }, [customerId]);

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__address">{customer.address}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="customer__location">Location: {customer.location?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Discharge
      </button>
      <button type="button" onClick={handleBack}>
        Go Back
      </button>
    </section>
  );
}