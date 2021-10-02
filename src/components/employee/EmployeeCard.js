import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({employee, handleDeleteEmployee}) => (
    <>
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Work Location: {employee.workLocation}</div>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Promote to Full Pay Customer</button>
        <Link to={`/employees/${employee.id}`}>
            <button>Details</button>
        </Link>
        </section>
    </>
)