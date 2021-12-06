import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

const BarraNavegacion = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Image src="client\src\reforestaccion-nafarroa-logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/arboles"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              Arboles{" "}
            </NavLink>

            <NavLink
              to="/plantaciones"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              Plantaciones{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default BarraNavegacion;
