import React from 'react'
import ReactDOM from 'react-dom/client'
// import NewApp from './NewApp.jsx'
import Nav from './Nav.jsx'
import W1_Homework from './W1_Homework.jsx'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <Nav />
    <W1_Homework />
  </>
  // </React.StrictMode>,
)

