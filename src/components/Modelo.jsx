import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./EstiloGeneral.css";
import "./Modelo.css";

export default function Modelo() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Fallback de seguridad por si onLoad falla
    const timeout = setTimeout(() => setCargando(false), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="page page--wide">
      <h1>Modelo Entidad-Relación</h1>

      {cargando && (
        <div className="progress-container">
          <div className="progress-bar" />
          <p className="progress-text">Cargando documentación externa...</p>
        </div>
      )}

      <iframe
        src="https://dbdocs.io/marezrioje/Parqueadero_ParkingApp?view=relationships"
        width="100%"
        height="640"
        onLoad={() => setCargando(false)}
        title="Diagrama ER - ParkingApp"
        allowFullScreen
      />

      <Outlet />
    </div>
  );
}
