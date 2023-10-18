import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

const CrearEncuesta = ({ agregarEncuesta }) => {
    const { register, handleSubmit, formState: { errors}, control} = useForm();
    const navigate = useNavigate();
    const [numOpciones, setNumOpciones] = useState(0);

    const onSubmit = (data) => {
        agregarEncuesta(data);
        navigate('/');
    };

    const handleNumOpcionesChange = (event) => {
        const value = parseInt(event.target.value);
        setNumOpciones(value);
    };

    return (
        <div>
            <h1>Crear Encuesta</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Título:</label>
                <input
                    type="text"
                    name="titulo"
                    {...register("titulo", { required: 'Este campo es obligatorio', maxLength: { value: 50, message: 'El título debe tener menos de 50 caracteres' } })}
                />
                {errors.titulo && <p>{errors.titulo.message}</p>}

                <label>Descripción:</label>
                <textarea
                    name="descripcion"
                    {...register("descripcion", { maxLength: { value: 200, message: 'La descripción debe tener menos de 200 caracteres' } })}
                />
                {errors.descripcion && <p>{errors.descripcion.message}</p>}

                <label>Número de Opciones de Respuesta:</label>
                <input
                    type="number"
                    name="numOpciones"
                    onChange={handleNumOpcionesChange}
                    value={numOpciones}
                />

                <div>
                    <label>Opciones de Respuesta:</label>
                    {Array.from({ length: numOpciones }).map((_, index) => (
                        <div key={index}>
                            <Controller
                                name={`opciones[${index}]`}
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <div>
                                        <input
                                            type="text"
                                            name={`opciones[${index}]`}
                                            placeholder={`Opción ${index + 1}`}
                                            {...field}
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    ))}
                </div>

                <button type="submit">Crear Encuesta</button>
            </form>
        </div>
    );
};

export default CrearEncuesta;