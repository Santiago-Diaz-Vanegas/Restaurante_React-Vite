import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/menu/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Mensaje enviado exitosamente');
        setFormData({
          nombre: '',
          apellidos: '',
          correo: '',
          telefono: '',
          mensaje: ''
        });
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje');
    }
  };

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
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="input-formulario">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" placeholder="Lucia" id="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="input-formulario">
          <label htmlFor="apellidos">Apellidos</label>
          <input type="text" placeholder="Gonzales" id="apellidos" value={formData.apellidos} onChange={handleChange} />
        </div>
        <div className="input-formulario">
          <label htmlFor="correo">Correo</label>
          <input type="email" placeholder="Example@example.com" id="correo" value={formData.correo} onChange={handleChange} />
        </div>
        <div className="input-formulario">
          <label htmlFor="telefono">Telefono</label>
          <input type="tel" placeholder="+57 987 543 1234" id="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="input-formulario">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
        </div>
        <div className="btn-formulario">
          <input type="submit" className="btn btn-verde" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Contacto;

