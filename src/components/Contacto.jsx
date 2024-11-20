import React from 'react';

const Contacto = () => {
  return (
    <div className="formulario-contacto contenedor" id="contacto">
      <div className="informacion-contacto">
        <h3>Contactanos</h3>
        <p><i className="fa-solid fa-location-dot"></i>Cra. 1 #501</p>
        <p><i className="fa-solid fa-envelope"></i>Menu@smagdalena.com</p>
        <p><i className="fa-solid fa-phone"></i>+57 3001233212</p>
        <div className="redes-sociales">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
      <form className="formulario">
        <div className="input-formulario">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" placeholder="Lucia" id="nombre" />
        </div>
        <div className="input-formulario">
          <label htmlFor="apellidos">Apellidos</label>
          <input type="text" placeholder="Gonzales" id="apellidos" />
        </div>
        <div className="input-formulario">
          <label htmlFor="correo">Correo</label>
          <input type="email" placeholder="Example@example.com" id="correo" />
        </div>
        <div className="input-formulario">
          <label htmlFor="telefono">Telefono</label>
          <input type="tel" placeholder="+57 987 543 1234" id="telefono" />
        </div>
        <div className="input-formulario">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje"></textarea>
        </div>
        <div className="btn-formulario">
          <input type="submit" className="btn btn-verde" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Contacto;
