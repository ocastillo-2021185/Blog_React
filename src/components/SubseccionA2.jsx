import React from 'react'

const SubseccionA2 = () => {
  const tareas = [
    {
      id: 1,
      nombre: 'Infografía',
      descripcion: 'Creación de una infografía sobre HTML5 CSS3, FlexBox,Bootstrap, LESS, SASS, PUG, JADE.',
      aprendizaje: 'Aprendimos a sintetizar información compleja en un formato visual atractivo y fácil de entender.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=378750',
    },
    {
      id: 2,
      nombre: 'Mapa Conceptual',
      descripcion: 'Elaboración de un mapa conceptual sobre Javascript, AJAX ,MVVM, MVC, DenoJS, MeteorJS, NextJS, GraphQL, BackboneJs.',
      aprendizaje: 'Practicamos la organización y estructuración de conceptos clave de manera visual y jerárquica.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=378757',
    },
    {
      id: 3,
      nombre: 'Prueba Objetiva',
      descripcion: 'Evaluación de los conocimientos adquiridos en la materia.',
      aprendizaje: 'Reforzamos y demostramos nuestro entendimiento de los conceptos clave de la tecnología.',
      enlace: 'https://kinal.academy/mod/quiz/view.php?id=378764',
    },
    {
      id: 4,
      nombre: 'Mapa Mental',
      descripcion: 'Creación de un mapa mental sobre Hosting, Dominio, Cliente-Servidor, Web semántica, WebM, Canvas, W3C.',
      aprendizaje: 'Aprendimos a organizar ideas y conceptos de forma radial, fomentando la creatividad y el pensamiento divergente.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=378771',
    },
    {
      id: 5,
      nombre: 'Prueba Objetiva 2',
      descripcion: 'Segunda evaluación de los conocimientos adquiridos en la materia.',
      aprendizaje: 'Consolidamos nuestro aprendizaje y demostramos nuestro dominio de los conceptos tecnológicos estudiados.',
      enlace: 'https://kinal.academy/mod/assign/view.php?id=416903',
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
      <h2>Tareas B1 Tecnología</h2>
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

export default SubseccionA2