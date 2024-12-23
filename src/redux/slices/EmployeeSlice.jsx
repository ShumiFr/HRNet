import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  },
  employees: [],
};

const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = { ...action.payload, id: Date.now() };
      state.employees.push(newEmployee);
    },

    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload.id
      );
    },
  },
});

export const { addEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
