const remoteURL = "http://localhost:5002"

export const getCustomerById = (customerId) => {
    return fetch(`${remoteURL}/customers/${customerId}?_expand=location`)
    .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(res => res.json())
}

export const deleteCustomer = (id) => {
    return fetch(`${remoteURL}/customers/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

//USED FOR THE FORM TO CREATE A NEW CUSTOMER IN THE DATABASE
export const addCustomer = (newCustomer) => {
    return fetch(`${remoteURL}/customers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCustomer)
    }).then(response => response.json())
  }