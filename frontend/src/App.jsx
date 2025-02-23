import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createemployee from "./components/Createemployee";
import Employeelist from "./components/Employeelist";
import EditEmployee from "./components/EditEmployee";
import EditSalary from "./components/EditSalary";
import CreateSalary from "./components/CreateSalary";
import SalaryList from "./SalaryList";
import Home from "./components/Home";
import Form from "./components/Form";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Createemployee" element={<Createemployee />} />
              <Route path="/Employeelist" element={<Employeelist />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/EditEmployee/:id" element={<EditEmployee />} />
              <Route path="/CreateSalary" element={<CreateSalary />} />
              <Route path="/SalaryList" element={<SalaryList />} />
              <Route path="/EditSalary/:id" element={<EditSalary />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
