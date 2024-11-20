import React from 'react';

const PiePagina = () => {
  return (
    <div className="pie-pagina">
      <div className="contenedor-piepagina contenedor">
        <div className="info">
          <h3>Dirección</h3>
          <p>Barrancabermeja/Santander</p>
        </div>
        <div className="info">
          <h3>Días de Descuento</h3>
          <p>Sábados y Domingos 11am - 9pm</p>
          <p>+57 3001233212</p>
        </div>
        <div className="info">
          <h3>Horarios</h3>
          <p>Sábados - Domingos 8am - 9pm</p>
          <div className="redes-sociales redes-pie">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="info">
          <h3>Suscríbete</h3>
          <p>¡Suscríbete para no perderte ninguna novedad!</p>
          <input type="email" placeholder="Tu Correo" />
          <input type="submit" className="btn btn-verde" value="Suscribirse" />
        </div>
      </div>
      <footer className="footer">
        <p>Todos los derechos reservados &copy; 2024 Sabores del Magdalena, Desarrollado por Santiago</p>
      </footer>
    </div>
  );
};

export default PiePagina;
