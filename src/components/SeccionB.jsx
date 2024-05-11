import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const SeccionB = () => {
  return (
    <div>
      <h2>Segundo Bimestre</h2>
      <nav>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#f0f0f0', borderRadius: '4px', marginRight: '0.5rem' }}>
          <NavLink to="subseccion-b1" style={{ textDecoration: 'none', color: '#333' }}>
            Taller
          </NavLink>
        </div>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#f0f0f0', borderRadius: '4px', marginRight: '0.5rem' }}>
          <NavLink to="subseccion-b2" style={{ textDecoration: 'none', color: '#333' }}>
            Tecnologia
          </NavLink>
        </div>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
          <NavLink to="subseccion-b3" style={{ textDecoration: 'none', color: '#333' }}>
            Practica
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default SeccionB