import { useEffect, useState } from "react";
import { deleteEmployee, getEmployeeById } from "../../modules/EmployeeManager";
import { useParams, useHistory } from "react-router-dom";

export const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({ name: "", location: ""});
    const [isLoading, setIsLoading] = useState(true);
    const {employeeId} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
        deleteEmployee(employeeId).then(() =>
        history.push("/employees")
        );
    };

    const handleBack = () => {
        history.push("/employees");
    }

    useEffect(() => {
        getEmployeeById(employeeId)
        .then(employee => {
            setEmployee({
                name: employee.name,
                location: employee.location
            });
        });
    }, [employeeId]);

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">{employee.location}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
            </button>
            <button type="button" onClick={handleBack}>
                Go Back
            </button>
        </section>
    )
}