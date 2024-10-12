import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/browse',
      element: <Browse/>
    },
    {
      path: '/auth',
      element: <Login/>
    }
  ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body