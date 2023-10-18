import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encuesta from './components/Encuesta';
import Inicio from './components/Inicio';
import CrearEncuesta from './components/CrearEncuesta';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import encuestas from './data/encuestas.json';
import './App.css';


function App() {
  const [listaEncuestas, setListaEncuestas] = useState(encuestas);
  //funcion para agregar la encuesta nueva a setListaEncuestas
  const agregarEncuesta = (nuevaEncuesta) => {
    nuevaEncuesta.id = listaEncuestas.length + 1;
    setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
  };
  //funcion para resolver la encuesta
  const resolverEncuesta = (encuestaId, respuestas) => {
    // Lógica para resolver la encuesta
    const encuesta = listaEncuestas.find((encuesta) => encuesta.id === parseInt(encuestaId));
    encuesta.respuestas = [respuestas];
  };

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio listaEncuestas={listaEncuestas} />} />
        <Route path="/encuesta/crear" element={<CrearEncuesta agregarEncuesta={agregarEncuesta} />} />
        <Route path="/encuestas/:id" element={<Encuesta listaEncuestas={listaEncuestas} resolverEncuesta={resolverEncuesta} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>      
  );
}

export default App;
