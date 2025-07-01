import React from "react";
import "./EstiloGeneral.css";
import "./Integrantes.css";

export default function Integrantes() {
  return (
    <div className="page page--list">
      <h2>📒 Integrantes</h2>
      <hr />
      <p>Grupo:</p>
      <ul>
        <li>
          <p>Dennys Johanna Rubio illamizar</p>
        </li>
        <li>
          <p>Luis Mario Jerez Pabón</p>
        </li>
        <li>
          <p>Wilker Julian botello medina</p>
        </li>
        <li>
          <p>Julian Granados Mendez </p>
        </li>
      </ul>
    </div>
  );
}
