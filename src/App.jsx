import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import EmployeeListPage from "./pages/EmployeeListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-employee" element={<CreateEmployeePage />} />
        <Route exact path="/" element={<EmployeeListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
