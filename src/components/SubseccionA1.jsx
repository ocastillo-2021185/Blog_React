import React from 'react'

const SubseccionA1 = () => {
  const tareas = [
    {
      id: 1,
      nombre: 'Laboratorio # 1',
      descripcion: 'En está tarea tuvimos la oportunidad de crear difentes paginas web.',
      aprendizaje: 'Aprendimos a estructurar una página web con HTML, aplicar estilos con CSS y agregar interactividad con JavaScript básico.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=368350',
    },
    {
      id: 2,
      nombre: 'Laboratorio #2',
      descripcion: 'En esta tarea completamos el proyecto de adopciones, con las funcionalidades que el profesor nos pidió.',
      aprendizaje: 'Acá empezamos a conocer el mero funcionamiento de nodeJS y mongoDB.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=368362',
    },
    {
      id: 3,
      nombre: 'Revisión de avances en proyecto final de bimestre',
      descripcion: 'Acá subimos el 35% de nuestro proyecto.',
      aprendizaje: 'Aplicamos los conceptos aprendidos en un proyecto más grande y complejo.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=368369',
    },
    {
      id: 4,
      nombre: 'Laboratorio #3',
      descripcion: 'Acá hicimos un proyecto gestor de empresas.',
      aprendizaje: 'Acá trabajamos con todo lo que hemos aprendido el funcionamiento de nodeJS y mongoDB.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=368383',
    },
    {
      id: 5,
      nombre: 'Proyecto Final Bim. I',
      descripcion: 'En está tarea hicimos la entrega final de nuestro proyecto.',
      aprendizaje: 'Integramos todos los conocimientos adquiridos durante el bimestre en un proyecto completo.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=368388',
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
      <h2>Tareas B1 Taller</h2>
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

export default SubseccionA1