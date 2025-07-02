import { Outlet } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Modelo.module.css";

export default function Modelo() {
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (cargando) {
        setError(true);
        setCargando(false);
      }
    }, 12000); // tiempo máximo para esperar carga

    return () => clearTimeout(timeout);
  }, [cargando]);

  const reloadIframe = () => {
    setError(false);
    setCargando(true);
    if (iframeRef.current) {
      iframeRef.current.src += ""; // forzar recarga
    }
  };

  return (
    <div className={`page ${styles.pageWide}`}>
      <h1>Modelo Entidad-Relación</h1>

      {cargando && !error && (
        <div className={styles.progressContainer}>
          <div className={styles.progressBar} />
          <p className={styles.progressText}>
            Cargando documentación externa...
          </p>
        </div>
      )}

      {error ? (
        <div className={styles.errorBox}>
          <p>
            ❌ No se pudo cargar el diagrama. Puede deberse a una red lenta o
            restricción del navegador.
          </p>
          <div className={styles.errorButtons}>
            <button onClick={reloadIframe} className={styles.button}>
              🔁 Reintentar
            </button>
            <a
              href="https://dbdocs.io/marezrioje/Parqueadero_ParkingApp?view=relationships"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              🌐 Abrir en otra pestaña
            </a>
          </div>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src="https://dbdocs.io/marezrioje/Parqueadero_ParkingApp?view=relationships"
          className={styles.pageIframe}
          title="Diagrama ER - ParkingApp"
          allowFullScreen
          onLoad={() => setCargando(false)}
          onError={() => {
            setError(true);
            setCargando(false);
          }}
        />
      )}

      <Outlet />
    </div>
  );
}
