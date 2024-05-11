import React from 'react'

const SubseccionB2 = () => {
  const tareas = [
    {
      id: 1,
      nombre: 'Infografía: Beneficios React',
      descripcion: 'Creación de una infografía que destaque los principales beneficios de utilizar React en el desarrollo de aplicaciones web.',
      aprendizaje: 'Desarrollo de habilidades de diseño gráfico y comunicación visual, así como comprensión de las ventajas de React.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=418710',
    },
    {
      id: 2,
      nombre: 'Propuesta de proyecto',
      descripcion: 'Elaboración de una propuesta detallada para un proyecto de tecnología, incluyendo objetivos, alcance, recursos necesarios y planificación temporal.',
      aprendizaje: 'Aprendizaje de la planificación y gestión de proyectos tecnológicos, así como la comunicación efectiva de ideas y conceptos.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=418715',
    },
    {
      id: 3,
      nombre: 'Exposición de proyecto',
      descripcion: 'Presentación oral y visual del proyecto, incluyendo demostraciones de funcionalidades y resultados obtenidos.',
      aprendizaje: 'Desarrollo de habilidades de presentación pública, síntesis de información y defensa de resultados obtenidos en el proyecto.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=418731',
    },
    {
      id: 4,
      nombre: 'Investigación',
      descripcion: 'Realización de una investigación sobre Estilos de codificación.',
      aprendizaje: 'Fomento de la capacidad de investigación, análisis crítico y síntesis de información en el contexto de Estilos de codificación.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=418720',
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
      <h2>Tareas B2 Tecnología</h2>
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

export default SubseccionB2
