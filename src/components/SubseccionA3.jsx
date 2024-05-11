import React from 'react'

const SubseccionA3 = () => {
  const tareas = [
    {
      id: 1,
      nombre: 'Laboratorio PS # 1',
      descripcion: 'Primer laboratorio práctico de la materia de Práctica Supervisada.',
      aprendizaje: 'Aplicamos los conceptos teóricos en un entorno práctico y desarrollamos habilidades técnicas relacionadas.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=378878',
    },
    {
      id: 2,
      nombre: 'Laboratorio PS # 2',
      descripcion: 'Segundo laboratorio práctico de la materia de Práctica Supervisada.',
      aprendizaje: 'Continuamos profundizando en la aplicación práctica de los conceptos y desarrollando nuestras habilidades técnicas.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=378890',
    },
    {
      id: 3,
      nombre: 'Laboratorio PS # 3',
      descripcion: 'Tercer laboratorio práctico de la materia de Práctica Supervisada.',
      aprendizaje: 'Reforzamos nuestras habilidades prácticas y abordamos nuevos desafíos técnicos relacionados con la materia.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=378904',
    },
    {
      id: 4,
      nombre: 'Evaluación bimestral PS',
      descripcion: 'En esta actividad se juntaban los punteos del proyecto de taller y examen de técnologia',
      aprendizaje: 'Aprendimos a calcular nuestra nota del examen de tecnologia xd.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=378909',
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
      <h2>Tareas B1 Práctica Supervisada</h2>
      <div style={containerStyle}>
        {tareas.map((tarea) => (
          <div key={tarea.id} style={cardStyle}>
            <h3>{tarea.nombre}</h3>
            <p>{tarea.descripcion}</p>
            <p><strong>Aprendizaje:</strong> {tarea.aprendizaje}</p>
            <a href={tarea.enlace} target="_blank" rel="noopener noreferrer">
              Ver tarea
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubseccionA3