import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditEmployee() {
  const [userForm, setUserForm] = useState({ name: "", email: "", empno: "" });
  let params = useParams();
  let navigate = useNavigate();
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/employees/update-employee/" + params.id, {
        name: userForm.name,
        email: userForm.email,
        empno: userForm.empno,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/Employeelist");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/employees/get-employee/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          email: res.data.data.email,
          empno: res.data.data.empno,
        });
      });
  }, []);
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
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
              type="text"
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
              {" "}
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditEmployee;
