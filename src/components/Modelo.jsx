import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./Modelo.module.css";

export default function Modelo() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setCargando(false), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`page ${styles.pageWide}`}>
      <h1>Modelo Entidad-Relación</h1>

      {cargando && (
        <div className={styles.progressContainer}>
          <div className={styles.progressBar} />
          <p className={styles.progressText}>
            Cargando documentación externa...
          </p>
        </div>
      )}

      <iframe
        src="https://dbdocs.io/marezrioje/Parqueadero_ParkingApp?view=relationships"
        className={styles.pageIframe}
        onLoad={() => setCargando(false)}
        title="Diagrama ER - ParkingApp"
        allowFullScreen
      />

      <Outlet />
    </div>
  );
}
