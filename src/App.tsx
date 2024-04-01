// import { useState } from 'react'

import './App.css'
// import Auth from './componets/authRoute'
import { RouterProvider } from 'react-router-dom'
import { AuthRoutes } from './router'

function App() {

  return (
    <RouterProvider router={AuthRoutes}/>
  )
}

export default App
