import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

const BarraNavegacion = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Navbar
        expanded={expanded}
        collapseOnSelect
        expand="lg"
        className="color-nav"
        variant="dark"
      >
        <Navbar.Brand href="/">REFORESTACCION</Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse>
          <Nav>
            <NavLink
              to="/arboles"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setExpanded(false)}
            >
              <p className="letras-nav">Arboles</p>
            </NavLink>

            <NavLink
              to="/plantaciones"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setExpanded(false)}
            >
              <p className="letras-nav">Plantaciones</p>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setExpanded(false)}
            >
              <p className="letras-nav">Iniciar sesión</p>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default BarraNavegacion;
