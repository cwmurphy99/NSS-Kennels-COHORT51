import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
//IMPORT THE ANIMAL LIST AND DETAILS
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from './animal/AnimalForm'
import { AnimalEditForm } from "./animal/AnimalEditForm"
//IMPORT THE LOCATION LIST AND DETAILS
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { LocationForm } from "./location/LocationForm"
//IMPORT THE EMPLOYEE LIST AND DETAILS
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { EmployeeForm } from "./employee/EmployeeForm"
//IMPORT THE CUSTOMER LIST AND DETAILS
import { CustomerList } from "./customer/CustomerList"
import { CustomerDetail } from "./customer/CustomerDetail"
import { CustomerForm } from "./customer/CustomerForm"
//IMPORT INFO FOR LOGIN AND REGISTERY
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";


export const ApplicationViews = ( {isAdmin, isAuthenticated, setAuthUser}) => {

  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home isAdmin={isAdmin} />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        {isAuthenticated ? <AnimalList /> : <Redirect to="/login" /> }
      </Route>

      {/* THIS WILL GIVE US THE RENDERING OF animal DETAILS WHEN THE BUTTON IS CLICKED */}
      <Route exact path="/animals/:animalId(\d+)"> {/*THE \d+ FORCES THE CODE TO REQUIRE A NUMBER */}
        <AnimalDetail />
      </Route>

      <Route exact path="/animals/:animalId(\d+)/edit">
        {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" /> }
      </Route>

      <Route exact path="/animals/create">
        <AnimalForm />
      </Route>

      <Route exact path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>

      {/* Render the location list when http://localhost:3000/locations */}
      <Route exact path="/locations">
        <LocationList />
      </Route>

      {/* THIS WILL GIVE US THE RENDERING OF location DETAILS WHEN THE BUTTON IS CLICKED */}
      <Route exact path="/locations/:locationId(\d+)">
        <LocationDetail />
      </Route>

      <Route path="/locations/create">
        <LocationForm />
      </Route>

      {/* Render the employee list when http://localhost:3000/employees */}
      <Route exact path="/employees">
        <EmployeeList />
      </Route>

      {/* THIS WILL GIVE US THE RENDERING OF employee DETAILS WHEN THE BUTTON IS CLICKED */}
      <Route exact path="/employees/:employeeId(\d+)">
        <EmployeeDetail />
      </Route>

      <Route path="/employees/create">
        <EmployeeForm />
      </Route>

      {/* Render the customer list when http://localhost:3000/customers */}
      <Route exact path="/customers">
        <CustomerList />
      </Route>

      {/* THIS WILL GIVE US THE RENDERING OF customer DETAILS WHEN THE BUTTON IS CLICKED */}
      <Route exact path="/customers/:customerId(\d+)">
        <CustomerDetail />
      </Route>

      <Route path="/customers/create">
        <CustomerForm />
      </Route>
    </>
  )
}