import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [infoVisible, setInfoVisible] = useState(null);

  const handleShowInfo = (id) => {
    setInfoVisible(id);
  };

  const handleBack = () => {
    setInfoVisible(null);
  };

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
            Visualización de la interfás donde se solicita el tipo de vehículo,
            placa y a su vez se muestra el número de cupos tanto usados como
            disponibles de cada uno
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
            Al eliminar el vehículo se le da salida y a su vez muestra la
            factura
          </h3>
          <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128678/WhatsApp_Image_2025-06-28_at_11.37.29_AM_1_xidmoq.jpg"
            alt="Parqueo"
            className={styles.infoImg}
          />
          <p>
            Este sistema permite registrar vehículos al momento de ingresar,
            especificando su placa, tipo (carro, moto o camión) y color...
          </p>
          <button className={styles.btnBack} onClick={handleBack}>
            Volver
          </button>
        </div>
      )}

      {infoVisible === 2 && (
        <div className={styles.infoPage}>
          <h2>
            Diseño e implementación de la base de datos para el sistema de
            parqueo
          </h2>
          <img
            src="https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/00_esquema_ytfsfl.png"
            alt="Parqueo"
            className={styles.infoImg}
          />
          <p>
            Diseño del Modelo de Entidad Relación e implementación en
            PostgreSQL.
          </p>
          <img
            src="https://res.cloudinary.com/dptqdghgv/image/upload/v1751241340/02_Ruta_resgistro_de_parqueo_busqueda_-_sql_bpfswb.png"
            alt="Parqueo"
            className={styles.infoImg}
          />
          <p>
            Creación de consultas SQL para manejo de la información y
            funcionalidades adicionales.
          </p>
          <button className={styles.btnBack} onClick={handleBack}>
            Volver
          </button>
        </div>
      )}

      {infoVisible === 3 && (
        <div className={styles.infoPage}>
          <h2>
            Aplicación funcional desplegada y conectada a la base de datos
          </h2>
          <img
            src="https://cdn.prod.website-files.com/63ebffe26f148f56701c191a/66f31bbf4f6b3cd3bd6f1bed_Reservations%20and%20Wayfinding.png"
            alt="Normas"
            className={styles.infoImg}
          />
          <p>Aplicación funcional desplegada con React, Vite y PostgreSQL.</p>
          <button className={styles.btnBack} onClick={handleBack}>
            Volver
          </button>
        </div>
      )}
    </div>
  );
}
