import React, { useState } from 'react';
import FormularioAlumno from './components/FormularioAlumno';
import ListaAlumno from './components/ListaAlumno';

const App = () => {
  const [grade, setGrade] = useState('8');

  return (
    <div>
      <h1>Alumnos</h1>
      <FormularioAlumno />
      <div>
        <label>Filtrar por grado:</label>
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
      </div>
      <ListaAlumno grade={grade} />
    </div>
  );
};

export default App;