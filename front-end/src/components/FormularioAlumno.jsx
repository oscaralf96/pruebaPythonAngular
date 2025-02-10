import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        nombre_alumno: '',
        fecha_nacimiento: '',
        nombre_padre: '',
        nombre_madre: '',
        grado: '',
        seccion: '',
        fecha_ingreso: ''
    });
    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/crear-alumno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin:adminpass')
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Error creating student');
      }
      
      const data = await response.json();
      alert('Student created successfully!');
      console.log(data);
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="form-group">
  <label>Nombre del alumno:</label>
  <input 
    type="text" 
    name="nombre_alumno" 
    value={formData.nombre_alumno} 
    onChange={handleChange} 
    required 
    className="form-control"
  />
</div>

<div className="form-group">
  <label>Fecha de nacimiento:</label>
  <input 
    type="date" 
    name="fecha_nacimiento" 
    value={formData.fecha_nacimiento} 
    onChange={handleChange} 
    required 
    className="form-control"
  />
</div>

<div className="form-group">
  <label>Nombre del padre:</label>
  <input 
    type="text" 
    name="nombre_padre" 
    value={formData.nombre_padre} 
    onChange={handleChange} 
    required 
    className="form-control"
  />
</div>

<div className="form-group">
  <label>Nombre de la madre:</label>
  <input 
    type="text" 
    name="nombre_madre" 
    value={formData.nombre_madre} 
    onChange={handleChange} 
    required 
    className="form-control"
  />
</div>

<div className="form-group">
  <label>Grado:</label>
  <input 
    type="text" 
    name="grado" 
    value={formData.grado} 
    onChange={handleChange} 
    required 
    className="form-control"
  />
</div>

<div className="form-group">
  <label>Sección:</label>
  <input 
    type="text" 
    name="seccion" 
    value={formData.seccion} 
    onChange={handleChange} 
    required 
    className="form-control"
  />
</div>

<div className="form-group">
  <label>Fecha de ingreso:</label>
  <input 
    type="date" 
    name="fecha_ingreso" 
    value={formData.fecha_ingreso} 
    onChange={handleChange} 
    required 
    className="form-control"
  />
</div>

      <button type="submit" className="submit-button">Create Student</button>
    </form>
  );
};

export default StudentForm;
