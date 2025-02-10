import React, { useState, useEffect } from 'react';
import './ListaAlumno.css';

const ListaAlumno = ({ grade }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`http://localhost:8000/consultar-alumno/${grade}`, {
            headers: {
                'Authorization': 'Basic ' + btoa('admin:adminpass')
        }});
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [grade]);

  return (
    <div className="student-list-container">
      <h2>Students in Grade {grade}</h2>
      <ul className="student-list">
        {students.map((student, index) => (<li key={index} className="student-item">
  <p><strong>Nombre:</strong> {student.nombre_alumno}</p>
  <p><strong>Fecha de Nacimiento:</strong> {student.fecha_nacimiento}</p>
  <p><strong>Padre:</strong> {student.nombre_padre}</p>
  <p><strong>Madre:</strong> {student.nombre_madre}</p>
  <p><strong>Grado:</strong> {student.grado}</p>
  <p><strong>Sección:</strong> {student.seccion}</p>
  <p><strong>Fecha de Ingreso:</strong> {student.fecha_ingreso}</p>
</li>

        ))}
      </ul>
    </div>
  );
};

export default ListaAlumno;