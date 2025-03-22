import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Employees from "./screens/Employees";
import AddEmployee from "./screens/AddEmployee";
import Navbar from "./components/Navbar";
import Employee from "./screens/Employee";
import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const getEmployees = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/`);
    const data = await res.json();
    setEmployees(data);
  };
  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Employees employees={employees} />} path="/" />
          <Route element={<AddEmployee />} path="/add" />
          <Route element={<Employee />} path="/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
