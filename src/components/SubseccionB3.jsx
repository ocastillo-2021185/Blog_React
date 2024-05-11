import React from 'react'

const SubseccionB3 = () => {
  const tareas = [
    {
      id: 1,
      nombre: 'Exposición sobre Flutter',
      descripcion: 'Preparación y realización de una exposición sobre el framework Flutter, abordando sus características, ventajas y aplicaciones en el desarrollo de aplicaciones móviles.',
      aprendizaje: 'Desarrollo de habilidades de investigación, comunicación oral y presentación de información sobre tecnologías emergentes en el ámbito de desarrollo de software.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=418803',
    },
    {
      id: 2,
      nombre: 'Proyecto de almacenadora con React y Node.js',
      descripcion: 'Desarrollo de una aplicación de gestión de inventario y almacenamiento utilizando las tecnologías React para el frontend y Node.js para el backend.',
      aprendizaje: 'Aplicación práctica de los conocimientos adquiridos en el desarrollo de aplicaciones web, así como trabajo en equipo y gestión de proyectos.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=418803',
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
      <h2>Tareas B2 Práctica</h2>
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

export default SubseccionB3
