// App.jsx
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Mi Blog de tareas</h1>
        <nav>
          <NavLink to="/seccion-a" className={({ isActive }) => isActive ? 'active' : ''}>
            Bimestre 1
          </NavLink>
          <NavLink to="/seccion-b" className={({ isActive }) => isActive ? 'active' : ''}>
            Bimestre 2
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App