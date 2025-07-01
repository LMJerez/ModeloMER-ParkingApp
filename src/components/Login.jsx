import React, { useState } from "react";
import "./EstiloGeneral.css";
import "./Login.css";

export default function Login() {
  const [infoVisible, setInfoVisible] = useState(null); // null = menú principal

  const handleShowInfo = (id) => {
    setInfoVisible(id); // mostrar info1, info2 o info3
  };

  const handleBack = () => {
    setInfoVisible(null); // volver al menú principal
  };

  return (
    <div className="login-container">
      <h2>Presentación del Sistema ParkingApp 🏍️🚙🚚🚗</h2>

      {infoVisible === null && (
        <div className="card-container">
          <div className="info-card" onClick={() => handleShowInfo(1)}>
            <h2>MISIÓN 1️⃣</h2>
            <p>
              Planteamiento, creación de interfás y funcionalidad del proyecto
            </p>
          </div>
          <div className="info-card" onClick={() => handleShowInfo(2)}>
            <h2>MISIÓN 2️⃣</h2>
            <p>
              Diseño de MER y creación de base de datos Postgre y consultas SQL
            </p>
          </div>
          <div className="info-card" onClick={() => handleShowInfo(3)}>
            <h2>MISIÓN 3️⃣</h2>
            <p>
              Aplicación funcional desplegada y conectada a la base de datos
            </p>
          </div>
        </div>
      )}

      {infoVisible === 1 && (
        <div className="info-page">
          <h2>Diseño funcional y maquetado del sistema de parqueo</h2>
          <p>
            Visualizacion de la interfas donde se solicita el tipo de vehiculo,
            placa y a su vez se muestra el numero de cupos tanto usados como
            disponibles de cada uno
          </p>
          <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128692/WhatsApp_Image_2025-06-28_at_11.36.21_AM_1_wpzfd7.jpg"
            alt="Parqueo"
            className="info-img"
          />
          <h3>Se crea el vehiculo con funciones para ver editar o eliminar</h3>
          <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128686/WhatsApp_Image_2025-06-28_at_11.37.02_AM_jcqs2h.jpg"
            alt="Parqueo"
            className="info-img"
          />
          <h3>
            Al eliminar el vehiculo se le da salida y a su vez muestra la
            factura
          </h3>
          <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128678/WhatsApp_Image_2025-06-28_at_11.37.29_AM_1_xidmoq.jpg"
            alt="Parqueo"
            className="info-img"
          />
          <p>
            Este sistema permite registrar vehículos al momento de ingresar,
            especificando su placa, tipo (carro, moto o camión) y color. El
            sistema controla automáticamente la capacidad máxima disponible para
            cada tipo de vehículo, evitando ingresos cuando los cupos están
            llenos.
          </p>
          <p>
            Cada vehículo tiene asociada una hora de ingreso, y al momento de la
            salida, se calcula el tiempo total de permanencia en minutos,
            multiplicado por una tarifa definida por minuto. Si el vehículo está
            marcado como afiliado, se le aplica un descuento del 5%.
          </p>
          <button className="btn-back" onClick={handleBack}>
            Volver
          </button>
        </div>
      )}

      {infoVisible === 2 && (
        <div className="info-page">
          <h2>
            Diseño e implementación de la base de datos para el sistema de
            parqueo
          </h2>
          <img
            src="https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/00_esquema_ytfsfl.png"
            alt="Parqueo"
            className="info-img"
          />
          <p>
            Diseño de la base de datos para el sistema de parqueo cubriendo los
            requerimientos funcionales.
          </p>
          <p>
            Diseño del Modelo de Entidad Relacion de los datos e implementacion
            en el manejador de bases de datos Postgree.
          </p>
          <img
            src="https://res.cloudinary.com/dptqdghgv/image/upload/v1751241340/02_Ruta_resgistro_de_parqueo_busqueda_-_sql_bpfswb.png"
            alt="Parqueo"
            className="info-img"
          />
          <p>
            Creacion de consultas SQL para manejo de la informacion funcionaliad
            adicional para el sistema.
          </p>
          <button className="btn-back" onClick={handleBack}>
            Volver
          </button>
        </div>
      )}

      {infoVisible === 3 && (
        <div className="info-page">
          <h2>
            Aplicacion funcional desplegada y conectada a la base de datos
          </h2>
          <img
            src="https://cdn.prod.website-files.com/63ebffe26f148f56701c191a/66f31bbf4f6b3cd3bd6f1bed_Reservations%20and%20Wayfinding.png"
            alt="Normas"
            className="info-img"
          />
          <p>
            Aplicacion funcional desplegada con tecnologia React, Vite y
            conectada a la base de datos Postgre y consultas SQL.
          </p>
          <p>
            Utilización de RouterDom para optimizacion del desempeño de la
            aplicacion y despliegue en Render.
          </p>
          <button className="btn-back" onClick={handleBack}>
            Volver
          </button>
        </div>
      )}
    </div>
  );
}
