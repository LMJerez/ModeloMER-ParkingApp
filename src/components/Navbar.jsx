import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarHeader}>
        <div className={styles.navbarBrand}>SISTEMA DE PARQUEO 🅿️</div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <ul
        className={`${styles.navbarLinks} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <li>
          <Link to="/login">INICIO</Link>
        </li>
        <li>
          <Link to="/info">INFORMACIÓN</Link>
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
