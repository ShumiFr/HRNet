/* eslint-disable react/prop-types */
const MenuDeroulant = ({ id, value, options, onChange }) => {
  return (
    <select id={id} value={value} onChange={onChange} className="form__select">
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MenuDeroulant;
