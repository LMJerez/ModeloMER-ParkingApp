import React from "react";
import styles from "./Integrantes.module.css";

export default function Integrantes() {
  return (
    <div className={`page ${styles.pageList}`}>
      <h2>📒 Integrantes</h2>
      <hr />
      <p>Grupo:</p>
      <ul>
        <li>👩‍💻 Dennys Johanna Rubio Illamizar</li>
        <li>👨‍💻 Luis Mario Jerez Pabón</li>
        <li>👨‍💻 Wilker Julián Botello Medina</li>
        <li>👨‍💻 Julián Granados Méndez</li>
      </ul>
    </div>
  );
}
