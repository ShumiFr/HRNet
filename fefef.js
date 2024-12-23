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

  <label htmlFor="dateOfBirth" className="form__label">
    Date of Birth
  </label>
  <input
    id="dateOfBirth"
    className="form__input"
    type="text"
    value={employee.dateOfBirth}
    onChange={handleChange}
  />

  <label htmlFor="startDate" className="form__label">
    Start Date
  </label>
  <input
    id="startDate"
    className="form__input"
    type="text"
    value={employee.startDate}
    onChange={handleChange}
  />

  <fieldset className="form__fieldset address">
    <legend className="form__legend">Address</legend>
    <div className="form__grid">
      <div className="form__grid__item">
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          value={employee.street}
          onChange={handleChange}
        />
      </div>

      <div className="form__grid__item">
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
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
          id="zipCode"
          type="number"
          value={employee.zipCode}
          onChange={handleChange}
        />
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
</form>;
