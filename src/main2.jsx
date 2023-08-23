import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import W2_Homework from './W2_Homework.jsx'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <Nav />
    <W2_Homework />
  </>
  // </React.StrictMode>,
)

