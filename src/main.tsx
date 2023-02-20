import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './pages/menu'
import "normalize.css";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Menu/>
  </React.StrictMode>,
)
