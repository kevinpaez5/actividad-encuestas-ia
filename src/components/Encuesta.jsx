//Pagina para ver encuestas
import { useParams, Link } from "react-router-dom";

const Encuesta = ({ listaEncuestas, resolverEncuesta }) => {
    const { id } = useParams();
    const encuesta = listaEncuestas.find((encuesta) => encuesta.id === parseInt(id));
    console.log("Preguntas", encuesta.preguntas);
    return (
        <div>
            <div className="encuesta-item-container">
                <div className="encuesta-item">
                    <h2> {encuesta.titulo}</h2>
                    <p>{encuesta.descripcion}</p>
                    <br />
                </div>
            </div>
            <div className="encuesta-item-container">
                <div className="encuesta-item">
                    <h2>Preguntas</h2>
                    {/* un parrafo por si no se encuentra la pregunta */}
                    <p>{ !encuesta.preguntas && <p>"No se encontraron preguntas"</p>}  

                    { encuesta.preguntas && encuesta.preguntas.map((pregunta) => ( 
                    <div key={ pregunta.id }>
                    <p>{pregunta.pregunta}</p>
                    {/* Colocar opciones para responder a las preguntas*/}
                    <p>{ !pregunta.opciones && <p>"No se encontraron opciones"</p>} </p>
                    <ol>
                        { pregunta.opciones && pregunta.opciones.map((opcion) => (
                        <div key={ opcion.id }>
                        
                        <label> 
                            <input type="radio" name={pregunta.id} value={opcion.id} />{opcion.texto}
                        </label>
                        </div>
                    ))}
                        </ol>
                    </div>
                    ))}
                    </p>
                    <br />
                </div>
            </div>
            <Link to="/">Volver</Link>
        </div>
    );
};

export default Encuesta;