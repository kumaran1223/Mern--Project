import React from "react";

function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home">
            Employee Form
          </a>
          <div className="d-flex justify-content-end">
            <a className="nav-link me-2" href="/Createemployee">
              create employee
            </a>
            &nbsp;&nbsp;
            <a className="nav-link" href="/employeelist">
              employee list
            </a>
            &nbsp;&nbsp;
            <a className="nav-link" href="/CreateSalary">
              CreateSalary
            </a>
            &nbsp;&nbsp;
            <a className="nav-link" href="/SalaryList">
              SalaryList
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
