/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

/**
 * @param {string} dateStr - date in the format "YYYY-MM-DD"
 * @return {string} - date in the format "MM/DD/YYYY"
 */

const formatToDisplay = (dateStr) => {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${month}/${day}/${year}`;
};

const formatToInput = (dateStr) => {
  if (!dateStr) return "";
  const [month, day, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
};

const DateTimePicker = ({ value, onChange }) => {
  const [date, setDate] = useState(value ? formatToInput(value) : "");

  useEffect(() => {
    setDate(value ? formatToInput(value) : "");
  }, [value]);

  const handleChange = (event) => {
    const formattedValue = formatToDisplay(event.target.value);
    setDate(event.target.value);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  return (
    <input
      type="date"
      value={date}
      className="form__input"
      onChange={handleChange}
    />
  );
};

export default DateTimePicker;
