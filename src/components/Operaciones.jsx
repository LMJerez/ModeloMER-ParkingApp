import React, { useState } from "react";
import "./EstiloGeneral.css";
import "./operaciones.css";

export default function Operaciones() {
  const [currentPage, setCurrentPage] = useState(0);
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const itemsPerPage = 3;

  // Imagen fija
  const imagenFija = {
    titulo: "🔹Modelo Entidad Relación",
    url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/00_esquema_ytfsfl.png"
  };

  // Imágenes dinámicas
  const imagenes = [
    { titulo: "🔹Insert Parqueadero", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230511/01_insertar_perqueadero_nh1n9x.png" },
    { titulo: "🔹Insert Tipo de plaza", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/02_insertar_tipos_de_plazas_a4nj9k.png" },
    { titulo: "🔹Insert Plazas", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/03_insertar_plazas_s2vdtn.png" },
    { titulo: "🔹Insert Tipos afiliación", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230511/04_insertar_tipos_de_afiliacion_rwztin.png" },
    { titulo: "🔹Insert Usuarios", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/05_insertar_usuarios_pkibxt.png" },
    { titulo: "🔹Insert Sesiones", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/06_insertar_sesiones_de_los_usuarios_qwzcj6.png" },
    { titulo: "🔹Métodos de pago", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/07_insertar_metodos_de_pago_jzl2k5.png" },
    { titulo: "🔹Insert Clientes", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/08_Insertar_clientes_aczf1t.png" },
    { titulo: "🔹Insert Vehículos", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/09_crear_vehiculos_gyzfuk.png" },
    { titulo: "🔹Insert Propiedad de Vehículos", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230512/10_insertar_propiedad_de_los_vehiculos_jpmyni.png" },
    { titulo: "🔹Insert Parqueos", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230513/11_insertar_parqueos_ftrduv.png" },
    { titulo: "🔹Insert Recibos de pago", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230514/12_insertar_recibos_de_parqueo_lpqeei.png" },
    { titulo: "🔹Actualizar parqueos finalizados", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751230514/13_antualizar_parqueos_con_datos_del_recibo_mutocj.png" },
    { titulo: "🔹Ruta Ocupación de plaza", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751241341/01_Ruta_icupacion_de_plazas_por_tipo_sxhbwi.png" },
    { titulo: "🔹Select: Mostrar ocupación", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751241340/01_Ruta_icupacion_de_plazas_-_sql_rkndrp.png" },
    { titulo: "🔹Ruta Registro parqueo", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751241341/02_Ruta_resgistro_de_parqueo_i8ujaz.png" },
    { titulo: "🔹Insert: Registrar Vehiculo", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751241339/02_Ruta_resgistro_de_parqueo_-_sql_vgs8gy.png" },
    { titulo: "🔹Select: Buscar plaza libre", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751241340/02_Ruta_resgistro_de_parqueo_busqueda_-_sql_bpfswb.png" },
    { titulo: "🔹Insert: Registrar Parqueo", url: "https://res.cloudinary.com/dptqdghgv/image/upload/v1751241340/02_Ruta_resgistro_de_parqueo_registro_-_sql_halomq.png" }
  ];

  const totalPages = Math.ceil(imagenes.length / itemsPerPage);
  const currentImages = imagenes.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="login-container">
      <h2>📋 Operaciones de Prueba</h2>

      {/* Imagen fija */}
      <div className="image-row">
        <div>
          <p>{imagenFija.titulo}</p>
          <img
            src={imagenFija.url}
            alt="Modelo ER"
            className="image"
            onClick={() => setImagenAmpliada(imagenFija)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Imágenes paginadas */}
      <div className="image-row">
        {currentImages.map((img, index) => (
          <div key={index}>
            <p>{img.titulo}</p>
            <img
              src={img.url}
              alt={img.titulo}
              className="image"
              onClick={() => setImagenAmpliada(img)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="nav-buttons">
        <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 0} className="button">
          ◀ Anterior
        </button>
        <button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages - 1} className="button">
          Siguiente ▶
        </button>
      </div>

      {/* Modal de imagen ampliada */}
      {imagenAmpliada && (
        <div className="modal-overlay" onClick={() => setImagenAmpliada(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setImagenAmpliada(null)}>✖</button>
            <img src={imagenAmpliada.url} alt={imagenAmpliada.titulo} />
            <p>{imagenAmpliada.titulo}</p>
          </div>
        </div>
      )}
    </div>
  );
}
