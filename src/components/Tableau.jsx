/* eslint-disable react/prop-types */
const Tableau = ({ employees, handleDelete }) => {
  return (
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
  );
};

export default Tableau;
