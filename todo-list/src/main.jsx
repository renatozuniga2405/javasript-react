import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoList from './views/TodoList.jsx'
import Rutas from './Rutas.jsx'
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Rutas/>

  </React.StrictMode>,
)
