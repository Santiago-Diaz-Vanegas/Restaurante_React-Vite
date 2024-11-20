import React from 'react';

const Chef = () => {
  return (
    <section className="chef contenedor" id="chef">
      <h2>Chef Maria Ramírez</h2>
      <div className="contenido-chef">
        <div className="texto-chef">
          <h3>Con más de 10 años de experiencia en la cocina, la Chef Maria es una verdadera experta en platillos de río.</h3>
          <p>
            Originaria de Barrancabermeja, ha dedicado su carrera a perfeccionar recetas tradicionales del
            Magdalena, transformándolas en obras maestras culinarias. Su pasión por los ingredientes locales y
            su habilidad para realzar los sabores del pescado fresco hacen de cada plato una experiencia
            inolvidable.
          </p>
          <a href="#menu" className="btn btn-verde">Nuestro Menu</a>
        </div>
        <div className="imagen-chef">
          <img data-src="/img/Chef.webp" alt="Foto del chef" />
        </div>
      </div>
    </section>
  );
};

export default Chef;
