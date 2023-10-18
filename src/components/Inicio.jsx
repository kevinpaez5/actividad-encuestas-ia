//Pagina de inicio con la lista de encuestas disponibles
import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = ({ listaEncuestas }) => {
    console.log("Lista de encuestas", listaEncuestas);
    return (
        <div>
            <h1>Lista de encuestas</h1>
            { listaEncuestas.map((encuesta) => {
                return (
                    <div className='encuesta-item-container'>
                        <div className='encuesta-item'>
                            <h2>{encuesta.titulo}</h2>
                            <p>{encuesta.descripcion}</p>
                            <Link to={`/encuestas/${encuesta.id}`}>Ver encuesta</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Inicio;