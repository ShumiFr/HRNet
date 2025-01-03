import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/slices/EmployeeSlice";
import states from "../data/states";
import $ from "jquery";
import "jquery-datetimepicker";
import "jquery-datetimepicker/jquery.datetimepicker.css";
import "jquery-modal";
import "jquery-modal/jquery.modal.min.css";
import "../styles/form.css";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "Alabama",
    zipCode: "",
    department: "Sales",
  });

  const validate = () => {
    const newErrors = {};
    if (!/^[A-Za-z]+$/.test(employee.firstName)) {
      newErrors.firstName = "First name must contain only letters.";
    }
    if (!/^[A-Za-z]+$/.test(employee.lastName)) {
      newErrors.lastName = "Last name must contain only letters.";
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(employee.dateOfBirth)) {
      newErrors.dateOfBirth = "Invalid date format (MM/DD/YYYY).";
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(employee.startDate)) {
      newErrors.startDate = "Invalid date format (MM/DD/YYYY).";
    }
    if (!/^\d{5}$/.test(employee.zipCode)) {
      newErrors.zipCode = "Zip code must be 5 digits.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(addEmployee(employee));
      setEmployee({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "Alabama",
        zipCode: "",
        department: "Sales",
      });
    }
    $("#confirmation").modal();
  };

  useEffect(() => {
    $.datetimepicker.setLocale("en");

    $("#dateOfBirth").datetimepicker({
      timepicker: false,
      format: "m/d/Y",
      onChangeDateTime: (dp, $input) => {
        setEmployee((prev) => ({ ...prev, dateOfBirth: $input.val() }));
      },
    });

    $("#startDate").datetimepicker({
      timepicker: false,
      format: "m/d/Y",
      onChangeDateTime: (dp, $input) => {
        setEmployee((prev) => ({ ...prev, startDate: $input.val() }));
      },
    });
  }, []);

  return (
    <form id="create-employee" className="form" onSubmit={handleSubmit}>
      <label htmlFor="firstName" className="form__label">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        className="form__input"
        value={employee.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <label htmlFor="lastName" className="form__label">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        className="form__input"
        value={employee.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <label htmlFor="dateOfBirth" className="form__label">
        Date of Birth
      </label>
      <input
        type="text"
        id="dateOfBirth"
        className="form__input"
        value={employee.dateOfBirth}
        onChange={handleChange}
      />
      {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}

      <label htmlFor="startDate" className="form__label">
        Start Date
      </label>
      <input
        type="text"
        id="startDate"
        className="form__input"
        value={employee.startDate}
        onChange={handleChange}
      />
      {errors.startDate && <p className="error">{errors.startDate}</p>}

      <fieldset className="form__fieldset address">
        <legend className="form__legend">Address</legend>
        <div className="form__grid">
          <div className="form__grid__item">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={employee.street}
              onChange={handleChange}
            />
          </div>

          <div className="form__grid__item">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={employee.city}
              onChange={handleChange}
            />
          </div>

          <div className="form__grid__item">
            <label htmlFor="state">State</label>
            <select id="state" value={employee.state} onChange={handleChange}>
              {states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form__grid__item">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="number"
              id="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
            />
            {errors.zipCode && <p className="error">{errors.zipCode}</p>}
          </div>
        </div>
      </fieldset>

      <label htmlFor="department" className="form__label">
        Department
      </label>
      <select
        name="department"
        id="department"
        className="form__select"
        value={employee.department}
        onChange={handleChange}
      >
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>

      <button type="submit" className="form__button">
        Save
      </button>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </form>
  );
};

export default EmployeeForm;
