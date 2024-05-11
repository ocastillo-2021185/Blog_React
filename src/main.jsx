import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import SeccionA from './components/SeccionA'
import SubseccionA1 from './components/SubseccionA1'
import SubseccionA2 from './components/SubseccionA2'
import SubseccionA3 from './components/SubseccionA3'
import SeccionB from './components/SeccionB'
import SubseccionB1 from './components/SubseccionB1'
import SubseccionB2 from './components/SubseccionB2'
import SubseccionB3 from './components/SubseccionB3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="seccion-a" element={<SeccionA />}>
          <Route path="subseccion-a1" element={<SubseccionA1 />} />
          <Route path="subseccion-a2" element={<SubseccionA2 />} />
          <Route path="subseccion-a3" element={<SubseccionA3 />} />
        </Route>
        <Route path="seccion-b" element={<SeccionB />}>
          <Route path="subseccion-b1" element={<SubseccionB1 />} />
          <Route path="subseccion-b2" element={<SubseccionB2 />} />
          <Route path="subseccion-b3" element={<SubseccionB3 />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)