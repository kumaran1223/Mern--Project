import React, { useState } from "react";
import axios from "axios";

function Createemployee() {
  const [userForm, setuserForm] = useState({
    name: "",
    email: "",
    empno: "",
  });
  const inputsHandler = (e) => {
    setuserForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log("data", userForm.name, userForm.email, userForm.empno);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/employees/Createemployee", userForm)
      .then((res) => {
        console.log(res);
        setuserForm({
          name: "",
          email: "",
          empno: "",
        });
      });
  };
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Emp no.</label>
            <input
              type="text"
              className="form-control"
              name="empno"
              id="empno"
              value={userForm.empno}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createemployee;
