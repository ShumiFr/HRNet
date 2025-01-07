/* eslint-disable react/prop-types */
import { useState } from "react";
import "./DateTimePicker.css";

const DateTimePicker = ({ value, onChange }) => {
  const [date, setDate] = useState(value || "");

  const handleChange = (event) => {
    setDate(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      type="datetime-local"
      value={date}
      onChange={handleChange}
      className="datetime-input"
    />
  );
};

export default DateTimePicker;
