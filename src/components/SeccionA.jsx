import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const SeccionA = () => {
  return (
    <div>
      <h2>Primer Bimestre</h2>
      <nav>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#f0f0f0', borderRadius: '4px', marginRight: '0.5rem' }}>
          <NavLink to="subseccion-a1" style={{ textDecoration: 'none', color: '#333' }}>
            Taller
          </NavLink>
        </div>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#f0f0f0', borderRadius: '4px', marginRight: '0.5rem' }}>
          <NavLink to="subseccion-a2" style={{ textDecoration: 'none', color: '#333' }}>
            Tecnologia
          </NavLink>
        </div>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
          <NavLink to="subseccion-a3" style={{ textDecoration: 'none', color: '#333' }}>
            Practica
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default SeccionA