import EmployeeForm from "../components/EmployeeForm";
import "../styles/form.css";

const CreateEmployeePage = () => {
  return (
    <main className="main">
      <div className="main__title">
        <h1 className="main__title__heading">HRnet</h1>
      </div>
      <div className="main__container">
        <a href="/" className="main__link">
          View Current Employees
        </a>
        <h2 className="main__heading">Create Employee</h2>
        <EmployeeForm />
      </div>
    </main>
  );
};

export default CreateEmployeePage;
