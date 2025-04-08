import React, { useState } from "react";
import CitaForm from "./CitaForm";


const CitaList = ({ citas, onEditar, onEliminar }) => {
  const [editandoId, setEditandoId] = useState(null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Scheduled Appointments</h2>
      {citas.length === 0 ? (
        <p>There are no registered appointments.</p>
      ) : (
        citas.map((cita) =>
          editandoId === cita.id ? (
            <CitaForm
              key={cita.id}
              initialData={cita}
              onSubmit={(nuevaCita) => {
                onEditar(cita.id, nuevaCita);
                setEditandoId(null);
              }}
              editMode
            />
          ) : (
            <div key={cita.id} className="border p-2 rounded mb-2">
              <p><strong>Student:</strong> {cita.nombre}</p>
              <p><strong>Date:</strong> {cita.fecha}</p>
              <p><strong>Time:</strong> {cita.hora}</p>
              <p><strong>Notes:</strong> {cita.servicio}</p>
              <button
                className="mr-2 bg-yellow-400 px-2 py-1 rounded"
                onClick={() => setEditandoId(cita.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onEliminar(cita.id)}
              >
                Delete
              </button>
            </div>
          )
        )
      )}
    </div>
  );
};

export default CitaList;
