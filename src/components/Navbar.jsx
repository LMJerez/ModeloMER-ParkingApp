import { Link } from "react-router-dom";
import React from "react";
import "./Estilogeneral.css";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">SISTEMA DE PARQUEO 🅿️</div>
      <ul className="navbar-links">
        <li>
          <Link to="/login">INICIO </Link>
        </li>
        <li>
          <Link to="/info">INFORMACIÓN </Link>
        </li>
        <li>
          <Link to="/modelo">MODELO ER</Link>
        </li>
        <li>
          <Link to="/operaciones">OPERACIONES DE PRUEBA</Link>
        </li>
        <li>
          <Link to="/integrantes">INTEGRANTES</Link>
        </li>
      </ul>
    </nav>
  );
}
