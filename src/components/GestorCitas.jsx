import React, { useState } from "react";
import CitaForm from "./CitaForm";
import CitaList from "./CitaList";
import { v4 as uuidv4 } from "uuid";

const GestorCitas = () => {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    const nuevaCita = { id: uuidv4(), ...cita };
    setCitas([...citas, nuevaCita]);
  };

  const editarCita = (id, nuevaCita) => {
    const actualizadas = citas.map((cita) =>
      cita.id === id ? { ...cita, ...nuevaCita } : cita
    );
    setCitas(actualizadas);
  };

  const eliminarCita = (id) => {
    const filtradas = citas.filter((cita) => cita.id !== id);
    setCitas(filtradas);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center text-sky-700 mb-4">My scheduled classes</h1>
      <CitaForm onSubmit={agregarCita} />
      <CitaList citas={citas} onEditar={editarCita} onEliminar={eliminarCita} />
    </div>
  );
};

export default GestorCitas;
