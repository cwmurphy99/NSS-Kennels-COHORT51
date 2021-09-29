import React from "react"
import "./Kennel.css"
import "./employee/Employee.css"
import "./location/Location.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

const isAdmin = true;

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews isAdmin={isAdmin} />
    </>
)