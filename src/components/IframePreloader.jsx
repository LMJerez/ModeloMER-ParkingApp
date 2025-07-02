import React from "react";
import styles from "./IframePreloader.module.css";

export default function IframePreloader() {
  return (
    // Precarga silenciosa del diagrama ER para acelerar la ruta /modelo
    <iframe
      src="https://dbdocs.io/marezrioje/Parqueadero_ParkingApp?view=relationships"
      className={styles.iframeOculto}
      title="Preload Modelo ER"
      onLoad={() => console.log("✔️ Diagrama ER precargado")}
    />
  );
}
