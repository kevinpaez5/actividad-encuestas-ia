// Crear un menu que almacene la pagina de inicio y la pagina de crear encuesta
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='menu'>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/encuesta/crear">Crear Encuesta</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;