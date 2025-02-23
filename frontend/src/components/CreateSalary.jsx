import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateSalary() {
  const [userForm, setUserForm] = useState({
    monthyear: "",
    netsal: "",
    employeeid: "",
  });
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/employees/")
      .then((res) => {
        setEmployees(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employees]);

  const inputsHandler = (e) => {
    setUserForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/salary/CreateSalary", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          monthyear: "",
          netsal: "",
          employeeid: "",
        });
      });
  };

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Month & Year </label>
            <input
              type="month"
              className="form-control"
              name="monthyear"
              id="monthyear"
              value={userForm.monthyear}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Net Salary</label>
            <input
              type="number"
              className="form-control"
              name="netsal"
              id="netsal"
              value={userForm.netsal}
              onChange={inputsHandler}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Employee</label>
            <select
              name="employeeid"
              value={userForm.employeeid}
              onChange={inputsHandler}
            >
              <option value="">Select Employee</option>
              {employees.map((employee) => (
                <option key={employee._id} value={employee._id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSalary;
