import React, { useState } from "react";

const CitaForm = ({ onSubmit, initialData = {}, editMode = false }) => {
  const [nombre, setNombre] = useState(initialData.nombre || "");
  const [fecha, setFecha] = useState(initialData.fecha || "");
  const [hora, setHora] = useState(initialData.hora || "");
  const [servicio, setServicio] = useState(initialData.servicio || "");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verificar si algún campo está vacío
    if (!nombre || !fecha || !hora || !servicio) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Validación de nombre (solo letras y espacios)
    const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre);
    if (!nombreValido) {
      alert("El nombre solo debe contener letras y espacios.");
      return;
    }
  
    onSubmit({ nombre, fecha, hora, servicio });
  
    if (!editMode) {
      setNombre("");
      setFecha("");
      setHora("");
      setServicio("");
    }
  };  

  return (
    <form onSubmit={handleSubmit} className="mb-4 border p-4 rounded bg-white shadow">
      <input
        type="text"
        placeholder="Student name"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="block w-full mb-2 border border-gray-300 rounded px-3 py-2"
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        className="block w-full mb-2 border border-gray-300 rounded px-3 py-2"
      />
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        className="block w-full mb-2 border border-gray-300 rounded px-3 py-2"
      />
      <input
        type="text"
        placeholder="Notes"
        value={servicio}
        onChange={(e) => setServicio(e.target.value)}
        className="block w-full mb-2 border border-gray-300 rounded px-3 py-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {editMode ? "Save Changes" : "Register class"}
      </button>
    </form>
  );
};

export default CitaForm;
