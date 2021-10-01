import React, { useState, useEffect } from 'react';
//IMPORT COMPONENTS
import { EmployeeCard } from './EmployeeCard';
import { deleteEmployee, getAllEmployees } from '../../modules/EmployeeManager'

export const EmployeeList = () => {
    //THE INITIAL STATE IS AN EMPTY ARRAY
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        //AFTER THE DATA COMES BACK FROM THE API, WE USE THE setEmployees FUNCTION TO UPDATE STATE
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
            .then(() => getAllEmployees().then(setEmployees));
    };

    //GET THE EMPLOYEES FROM THE API ON THE COMPONENTS FIRST RENDER
    useEffect(() => {
        getEmployees();
    }, []);

    //USE THE .map() FUNCTION TO LOOP OVER THE EMPLOYEES ARRAY TO SHOW A LIST OF EMPLOYEE CARDS
    return (
        <div className="employee-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee} />)}
        </div>
    );
};