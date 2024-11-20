import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const imagenes = document.querySelectorAll('img');

    const cargarImagenes = () => {
      imagenes.forEach(imagen => {
        imagen.src = imagen.dataset.src;
      });
    };

    cargarImagenes();
  }, []);

  const abrirMenu = () => {
    setMenuOpen(true);
  };

  const cerrarMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="encabezado">
      <div className="contenedor-navegacion">
        <div className="contenido-navegacion contenedor">
          <div className="logo">
            <h2>Sabores <span className="amarillo">del</span> Magdal<span className="amarillo">ena</span></h2>
          </div>
          <nav className={`navegacion ${menuOpen ? '' : 'ocultar'}`}>
            <a href="#inicio" onClick={cerrarMenu}>Inicio</a>
            <a href="#sobre-nosotros" onClick={cerrarMenu}>Sobre Nosotros</a>
            <a href="#menu" onClick={cerrarMenu}>Menú</a>
            <a href="#chef" onClick={cerrarMenu}>Chef</a>
            <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
          </nav>
          <div className="hamburguesa" onClick={abrirMenu}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
      <div className="contenido-header">
        <div className="contenedor-encabezado" id="inicio">
          <div className="texto-encabezado">
            <h2>¡Bienvenido!</h2>
            <a href="#menu" className="btn bordes">nuestro menú</a>
          </div>
          <video autoPlay loop muted>
            <source src="/bg_video.mp4" type="video/mp4" />
            Tu navegador no soporta el video HTML5.
          </video>
        </div>
      </div>
    </header>
  );
};

export default Header;

