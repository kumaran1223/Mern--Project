import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function EmployeeList() {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pages = Array.from(Array(totalPages).keys());
  const [userForm, setUserForm] = useState([]);
  const deleteEmployee = (_id) => {
    axios
      .delete("http://localhost:4000/employees/delete-employee/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/employees?page=${pageNumber}`)
      .then((res) => {
        setUserForm(res.data.data);
        setTotalPages(res.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Emp no</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.empno}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/EditEmployee/" + user._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteEmployee(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {pages.map((pageIndex) => (
        <input
          type="button"
          onClick={() => setPageNumber(pageIndex)}
          value={pageIndex + 1}
        />
      ))}
    </div>
  );
}
export default EmployeeList;
