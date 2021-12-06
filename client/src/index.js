import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Registro from "./views/Registro";
import LogIn from "./views/LogIn.js";
import MiCuenta from "./views/Micuenta";
import MisPlantaciones from "./views/Misplantaciones";
import MisArboles from "./views/Misarboles";
import Arboles from "./views/Arboles";
import Arbol from "./views/Arbol";
import Plantaciones from "./views/Plantaciones";
import Plantacion from "./views/Plantacion";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route path="/misplantaciones" element={<MisPlantaciones />} />
        <Route path="/misarboles" element={<MisArboles />} />
        <Route path="/arboles" element={<Arboles />} />
        <Route path="/arboles/:arbolId" element={<Arbol />} />

        <Route path="/plantaciones" element={<Plantaciones />} />
        <Route path="/plantaciones/:plantacionId" element={<Plantacion />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
