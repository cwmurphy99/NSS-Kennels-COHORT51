import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
//IMPORT THE ANIMAL LIST AND DETAILS
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
//IMPORT THE LOCATION LIST AND DETAILS
import { LocationList } from "./location/LocationList"
import {LocationDetail} from "./location/LocationDetail"
//IMPORT THE EMPLOYEE LIST AND DETAILS
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeDetail } from "./employee/EmployeeDetail"
//IMPORT THE CUSTOMER LIST AND DETAILS
import { CustomerList } from "./customer/CustomerList"
import { CustomerDetail } from "./customer/CustomerDetail"



export const ApplicationViews = ({ isAdmin }) => {
  return (
    <>
{/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home isAdmin={isAdmin} />
      </Route>

{/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        <AnimalList />
      </Route>

{/* THIS WILL GIVE US THE RENDERING OF animal DETAILS WHEN THE BUTTON IS CLICKED */}
      <Route path="/animals/:animalId(\d+)"> {/*THE \d+ FORCES THE CODE TO REQUIRE A NUMBER */}
        <AnimalDetail />
      </Route>

{/* Render the location list when http://localhost:3000/locations */}
      <Route exact path="/locations">
        <LocationList />
      </Route>

{/* THIS WILL GIVE US THE RENDERING OF location DETAILS WHEN THE BUTTON IS CLICKED */}
      <Route exact path="/locations/:locationId(\d+)">
        <LocationDetail />
      </Route>

{/* Render the employee list when http://localhost:3000/employees */}
      <Route path="/employees">
        <EmployeeList />
      </Route>

{/* THIS WILL GIVE US THE RENDERING OF employee DETAILS WHEN THE BUTTON IS CLICKED */}
      <Route path="/employees/:employeeId(\d+)">
        <EmployeeDetail />
      </Route>

      {/* Render the customer list when http://localhost:3000/customers */}
      <Route exact path="/customers">
        <CustomerList />
      </Route>

{/* THIS WILL GIVE US THE RENDERING OF customer DETAILS WHEN THE BUTTON IS CLICKED */}
      <Route exact path="/customers/:customerId(\d+)">
        <CustomerDetail />
      </Route>
    </>
  )
}