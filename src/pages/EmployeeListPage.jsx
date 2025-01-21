import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/slices/EmployeeSlice";
import Tableau from "../components/Tableau";
import Modal from "../components/Modal";
import "../styles/table.css";
import { Link } from "react-router-dom";

const EmployeeListPage = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);

  const openModal = () => {
    const modal = document.getElementById("confirmation");
    const modalBackground = document.querySelector(".modal-background");
    modalBackground.style.display = "flex";
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.display = "none";
      modalBackground.style.display = "none";
    }, 1000);
  };

  const handleDelete = (employeeId) => {
    dispatch(deleteEmployee({ id: employeeId }));
    openModal();
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
      <Link to="/create-employee" className="employee-list__link">
        Home
      </Link>
      <Modal message={"Employee Deleted !"} />
    </div>
  );
};

export default EmployeeListPage;
