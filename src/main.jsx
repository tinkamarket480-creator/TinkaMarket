import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AdminPanel from './AdminPanel.jsx'

const ruta = window.location.hash

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ruta === '#admin' ? <AdminPanel /> : <App />}
  </StrictMode>,
)