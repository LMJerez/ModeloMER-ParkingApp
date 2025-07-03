import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [infoVisible, setInfoVisible] = useState(null);

  const handleShowInfo = (id) => setInfoVisible(id);
  const handleBackToStart = () => setInfoVisible(null);
  const handleNext = () => setInfoVisible((prev) => prev + 1);
  const handlePrev = () => setInfoVisible((prev) => prev - 1);

  return (
    <div className={styles.loginContainer}>
      <h2>Presentación del Sistema ParkingApp 🏍️🚙🚚🚗</h2>

      {infoVisible === null && (
        <div className={styles.cardContainer}>
          <div className={styles.infoCard} onClick={() => handleShowInfo(1)}>
            <h2>MISIÓN 1️⃣</h2>
            <p>
              Planteamiento, creación de interfás y funcionalidad del proyecto
            </p>
          </div>
          <div className={styles.infoCard} onClick={() => handleShowInfo(2)}>
            <h2>MISIÓN 2️⃣</h2>
            <p>
              Diseño de MER y creación de base de datos Postgre y consultas SQL
            </p>
          </div>
          <div className={styles.infoCard} onClick={() => handleShowInfo(3)}>
            <h2>MISIÓN 3️⃣</h2>
            <p>
              Aplicación funcional desplegada y conectada a la base de datos
            </p>
          </div>
        </div>
      )}

      {infoVisible === 1 && (
        <div className={styles.infoPage}>
          <h2>Diseño funcional y maquetado del sistema de parqueo</h2>
          <p>
            Visualización de la interfás donde se solicita tipo de vehículo,
            placa y número de cupos usados y disponibles.
          </p>
          <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128692/WhatsApp_Image_2025-06-28_at_11.36.21_AM_1_wpzfd7.jpg"
            alt="Parqueo"
            className={styles.infoImg}
          />
          <h3>Se crea el vehículo con funciones para ver, editar o eliminar</h3>
          <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128686/WhatsApp_Image_2025-06-28_at_11.37.02_AM_jcqs2h.jpg"
            alt="Parqueo"
            className={styles.infoImg}
          />
          <h3>
            Al eliminar el vehículo se le da salida y se genera la factura
          </h3>
          <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128678/WhatsApp_Image_2025-06-28_at_11.37.29_AM_1_xidmoq.jpg"
            alt="Parqueo"
            className={styles.infoImg}
          />
          <p>
            El sistema registra vehículos, controla capacidad por tipo y calcula
            tiempo de permanencia para generar el total a pagar.
          </p>
        </div>
      )}

      {infoVisible === 2 && (
        <div className={styles.infoPage}>
          <h2>Diseño e implementación de la base de datos</h2>
          <img
            src="https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/00_esquema_ytfsfl.png"
            alt="Modelo ER"
            className={styles.infoImg}
          />
          <p>
            Diseño del MER y consultas SQL aplicadas a PostgreSQL según los
            requerimientos del sistema.
          </p>
          <img
            src="https://res.cloudinary.com/dptqdghgv/image/upload/v1751241340/02_Ruta_resgistro_de_parqueo_busqueda_-_sql_bpfswb.png"
            alt="SQL Ruta Parqueo"
            className={styles.infoImg}
          />
          <p>
            Consultas para registro, búsqueda y control de información sobre
            vehículos y parqueos.
          </p>
        </div>
      )}

      {infoVisible === 3 && (
        <div className={styles.infoPage}>
          <h2>Aplicación funcional y conectada a la base de datos</h2>
          <img
            src="https://cdn.prod.website-files.com/63ebffe26f148f56701c191a/66f31bbf4f6b3cd3bd6f1bed_Reservations%20and%20Wayfinding.png"
            alt="App"
            className={styles.infoImg}
          />
          <p>
            Sistema desplegado con React + Vite + PostgreSQL, usando rutas,
            diseño responsivo y despliegue en Render.
          </p>
        </div>
      )}

      {infoVisible !== null && (
        <div className={styles.navButtons}>
          <button onClick={handleBackToStart} className={styles.button}>
            Inicio
          </button>
          <button
            onClick={handlePrev}
            disabled={infoVisible <= 1}
            className={styles.button}
          >
            ◀ Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={infoVisible >= 3}
            className={styles.button}
          >
            Siguiente ▶
          </button>
        </div>
      )}
    </div>
  );
}
