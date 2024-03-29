import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="col s12 l4 " key={producto.id}>
      <div className="card contenedor-item">
        <div className="card-image">
          <img src={producto.imagen} alt="imagen" />
        </div>
        <div className="card-content">
          <span>{producto.titulo}</span>
          <p>ARS${producto.precio}</p>
        </div>
        <div className="card-action">
          <Link to={`/item/${producto.id}`}>Ver producto</Link>
        </div>
      </div>
    </div>
  )
}

export default Item
