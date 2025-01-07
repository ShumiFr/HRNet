import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/slices/EmployeeSlice";
import Tableau from "../components/Tableau";
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
        <Tableau employees={employees} handleDelete={handleDelete} />
      </table>
      <a href="/create-employee" className="employee-list__link">
        Home
      </a>
    </div>
  );
};

export default EmployeeListPage;
