import React from 'react';

const Nosotros = () => {
  return (
    <div className="contenedor-nosotros contenedor" id="sobre-nosotros">
      <div className="texto-nosotros">
        <p className="bienvenida">¡Bienvenidos a!</p>
        <h1>Sabores del Magdalena</h1>
        <p>
          Un rincón culinario en el corazón de Barrancabermeja, donde la tradición y la innovación se unen para
          celebrar la rica herencia gastronómica del río Magdalena. Nuestro restaurante se especializa en
          platillos de río, ofreciendo una experiencia única que resalta los sabores auténticos de la región.
          Fundado con la pasión por la cocina local, Sabores del Magdalena es el lugar ideal para disfrutar de una
          cocina que honra nuestras raíces y ofrece un viaje gastronómico memorable. Nos enorgullece utilizar
          ingredientes frescos y de origen local, garantizando que cada plato no solo deleite el paladar, sino que
          también apoye a las comunidades pesqueras locales.
        </p>
        <a href="#contacto" className="btn btn-rojo">contactar</a>
      </div>
      <div className="imagenes-nosotros">
        <div className="imagen1">
          <img data-src="/img/nosotros1.webp" alt="mujer comiendo" />
        </div>
        <div className="imagenes2">
          <img data-src="/img/nosotros2.webp" alt="mujeres comiendo" />
          <img data-src="/img/nosotros3.webp" alt="plato con frutas y verduras" />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
