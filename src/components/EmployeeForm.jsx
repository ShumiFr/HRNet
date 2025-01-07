import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/slices/EmployeeSlice";
import states from "../data/states";
import Modal from "./Modal";
import MenuDeroulant from "./MenuDeroulant";
import DateTimePicker from "./DateTimePicker";
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
  const departments = [
    { name: "Sales" },
    { name: "Marketing" },
    { name: "Engineering" },
    { name: "Human resources" },
    { name: "Legal" },
  ];

  const validate = () => {
    const newErrors = {};
    if (!/^[A-Za-z]+$/.test(employee.firstName)) {
      newErrors.firstName = "First name must contain only letters.";
    }
    if (!/^[A-Za-z]+$/.test(employee.lastName)) {
      newErrors.lastName = "Last name must contain only letters.";
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(employee.dateOfBirth)) {
      newErrors.dateOfBirth = "Invalid date format (DD/MM/YYYY).";
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(employee.startDate)) {
      newErrors.startDate = "Invalid date format (DD/MM/YYYY).";
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

  const openModal = () => {
    const modal = document.getElementById("confirmation");
    const modalBackground = document.querySelector(".modal-background");
    modalBackground.style.display = "flex";
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.display = "none";
      modalBackground.style.display = "none";
    }, 3000);
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
      setErrors({});
      openModal();
    }
  };

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
      <DateTimePicker
        value={employee.dateOfBirth}
        onChange={(value) =>
          setEmployee((prev) => ({ ...prev, dateOfBirth: value }))
        }
      />
      {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}

      <label htmlFor="startDate" className="form__label">
        Start Date
      </label>
      <DateTimePicker
        value={employee.startDate}
        onChange={(value) =>
          setEmployee((prev) => ({ ...prev, startDate: value }))
        }
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
            <MenuDeroulant
              id="state"
              value={employee.state}
              options={states}
              onChange={handleChange}
            />
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

      <MenuDeroulant
        id="department"
        value={employee.department}
        options={departments}
        onChange={handleChange}
      />

      <button type="submit" className="form__button">
        Save
      </button>
      <Modal message={"Employee Created!"} />
    </form>
  );
};

export default EmployeeForm;
