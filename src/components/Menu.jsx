import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [platillos, setPlatillos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu/getMenuItems')
      .then(response => {
        setPlatillos(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatPrice = (price) => {
    // Convert the price to a string with thousand separators and replace ',' with '.'
    const formattedPrice = price.toFixed(3).toLocaleString('es-CO', { minimumFractionDigits: 0 });
    return `$${formattedPrice.replace(/,/g, '.')}`;
  };

  const displayItems = (items) => {
    return items.map(item => (
      <div className="menu-item" key={item.nombre}>
        <img src={item.imagen} alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>{item.ingredientes}</p>
        <p className="price">{formatPrice(item.precio)}</p>
      </div>
    ));
  };

  const filterItems = (category) => {
    return category === "Todos" ? platillos : platillos.filter(item => item.categoria === category);
  };

  const [filteredItems, setFilteredItems] = useState(platillos);

  const handleFilter = (category) => {
    setFilteredItems(filterItems(category));
  };

  useEffect(() => {
    setFilteredItems(platillos);
  }, [platillos]);

  return (
    <div className="menu-container" id="menu">
      <h2 className="texto-platillos">Menú del Restaurante</h2>
      <div className="filters">
        <button onClick={() => handleFilter("Todos")}>Todos</button>
        <button onClick={() => handleFilter("Entrada")}>Entrada</button>
        <button onClick={() => handleFilter("Ensalada")}>Ensalada</button>
        <button onClick={() => handleFilter("Cazuela")}>Cazuela</button>
        <button onClick={() => handleFilter("Cazuelitas")}>Cazuelitas</button>
        <button onClick={() => handleFilter("Pescado")}>Pescado</button>
        <button onClick={() => handleFilter("Mariscos")}>Mariscos</button>
        <button onClick={() => handleFilter("Filetes")}>Filetes</button>
        <button onClick={() => handleFilter("Carne y Avez")}>Carne y Avez</button>
        <button onClick={() => handleFilter("Pasta")}>Pasta</button>
        <button onClick={() => handleFilter("Arroz")}>Arroz</button>
        <button onClick={() => handleFilter("Bebidas")}>Bebidas</button>
        <button onClick={() => handleFilter("Cervezas")}>Cervezas</button>
        <button onClick={() => handleFilter("Postres")}>Postres</button>
      </div>
      <div className="menu-items" id="menu-items">
        {displayItems(filteredItems)}
      </div>
    </div>
  );
};

export default Menu;



