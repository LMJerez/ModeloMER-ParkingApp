import React from "react";
import styles from "./Info.module.css";

export default function Info() {
  return (
    <div className="page">
      <h1 className={styles.tituloPrincipal}>ℹ️ Información del Proyecto</h1>
      <div className={styles.scrollableContainer}>
        <h2>Nombre: PARKING APP</h2>
        <h2>Sector: Servicios</h2>
        <h2>Descripción:</h2>
        <h1 className={styles.emoji}>🅿️🚗💲</h1>
        <p>
          Este proyecto es una aplicación web interactiva para la gestión de
          parqueaderos, desarrollada con React y estructurada en componentes
          reutilizables. Su funcionalidad principal permite registrar vehículos
          al momento de ingresar, especificando su placa, tipo (carro, moto o
          camión) y descripción adicional.
        </p>
        <ul>
          <li>
            <p className={styles.listaTexto}>
              El sistema controla automáticamente la capacidad máxima disponible
              para cada tipo de vehículo, evitando ingresos cuando los cupos
              están llenos.
            </p>
          </li>
          <li>
            <p className={styles.listaTexto}>
              Cada vehículo tiene asociada una hora de ingreso, y al momento de
              la salida, se calcula el tiempo total de permanencia en minutos,
              multiplicado por una tarifa definida por minuto. Si el vehículo
              está marcado como afiliado, se le aplica un descuento del 5%.
            </p>
          </li>
          <li>
            <p className={styles.listaTexto}>
              La aplicación genera un recibo con todos los detalles del ingreso
              y salida, mostrando el total a pagar. Además, cuenta con
              funcionalidades como edición de placa, alertas visuales (de éxito
              o error), confirmaciones previas al cobro, y una interfaz
              intuitiva con botones y modales personalizados.
            </p>
          </li>
        </ul>
        <p>
          Fue desplegada en Render a partir de un repositorio de GitHub, lo que
          permite actualizaciones automáticas con cada cambio realizado en el
          código.
        </p>
      </div>
    </div>
  );
}
