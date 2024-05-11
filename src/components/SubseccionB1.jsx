import React from 'react'

const SubseccionB1 = () => {
  const tareas = [
    {
      id: 1,
      nombre: 'Ejercicios sobre lógica de programación',
      descripcion: 'Realización de ejercicios prácticos para comprender y aplicar los fundamentos de la lógica de programación de nodeJS.',
      aprendizaje: 'Desarrollo de habilidades de pensamiento lógico y resolución de problemas mediante la programación.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=418531',
    },
    {
      id: 2,
      nombre: 'Revisión de avances en proyecto final de bimestre',
      descripcion: 'Revisión y discusión de los avances realizados en el proyecto final de taller durante el bimestre.',
      aprendizaje: 'Refinamiento de habilidades de desarrollo de proyectos, trabajo en equipo y presentación de resultados.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=426111',
    },
  ]

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '1rem',
    justifyContent: 'center',
  }

  const cardStyle = {
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ccc',
  }

  return (
    <div>
      <h2>Tareas B2 Taller</h2>
      <div style={containerStyle}>
        {tareas.map((tarea) => (
          <div key={tarea.id} style={cardStyle}>
            <h3>{tarea.nombre}</h3>
            <p>{tarea.descripcion}</p>
            <p><strong>Aprendizaje:</strong> {tarea.aprendizaje}</p>
            {/* El enlace puede ser reemplazado por el enlace apropiado */}
            <a href={tarea.enlace} target="_blank" rel="noopener noreferrer">
              Ver tarea
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubseccionB1
