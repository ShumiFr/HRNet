import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/slices/EmployeeSlice";
import "../styles/table.css";

const EmployeeListPage = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);

  const handleDelete = (employeeId) => {
    dispatch(deleteEmployee({ id: employeeId }));
  };

  return (
    <div id="employee-div" className="employee-list">
      <h1 className="employee-list__title">Current Employees</h1>
      <table className="employee-list__table">
        <thead className="employee-list__thead">
          <tr className="employee-list__row">
            <th className="employee-list__header">First Name</th>
            <th className="employee-list__header">Last Name</th>
            <th className="employee-list__header">Start Date</th>
            <th className="employee-list__header">Department</th>
            <th className="employee-list__header">Date of Birth</th>
            <th className="employee-list__header">Street</th>
            <th className="employee-list__header">City</th>
            <th className="employee-list__header">State</th>
            <th className="employee-list__header">Zip Code</th>
            <th className="employee-list__header">Actions</th>
          </tr>
        </thead>
        <tbody className="employee-list__tbody">
          {employees.map((employee, index) => (
            <tr key={index} className="employee-list__row">
              <td className="employee-list__cell">{employee.firstName}</td>
              <td className="employee-list__cell">{employee.lastName}</td>
              <td className="employee-list__cell">{employee.startDate}</td>
              <td className="employee-list__cell">{employee.department}</td>
              <td className="employee-list__cell">{employee.dateOfBirth}</td>
              <td className="employee-list__cell">{employee.street}</td>
              <td className="employee-list__cell">{employee.city}</td>
              <td className="employee-list__cell">{employee.state}</td>
              <td className="employee-list__cell">{employee.zipCode}</td>
              <td className="employee-list__cell">
                <button
                  className="employee-list__button"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/create-employee" className="employee-list__link">
        Home
      </a>
    </div>
  );
};

export default EmployeeListPage;
