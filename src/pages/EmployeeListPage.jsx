import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/slices/EmployeeSlice";
import Tableau from "../components/Tableau";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import "../styles/pages/employeeList.css";

const EmployeeListPage = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);

  const openModal = () => {
    document.getElementById("confirmation").style.display = "flex";
    document.querySelector(".modal-background").style.display = "flex";
    setTimeout(() => {
      document.getElementById("confirmation").style.display = "none";
      document.querySelector(".modal-background").style.display = "none";
    }, 1000);
  };

  const handleDelete = (employeeId) => {
    dispatch(deleteEmployee({ id: employeeId }));
    openModal();
  };

  return (
    <div id="employee-div" className="employee-list">
      <h1 className="employee-list__title">Current Employees</h1>
      <Tableau employees={employees} handleDelete={handleDelete} />
      <Link to="/create-employee" className="employee-list__link">
        Home
      </Link>
      <Modal message={"Employee Deleted!"} />
    </div>
  );
};

export default EmployeeListPage;
