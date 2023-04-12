import React, { useState } from 'react'
import LoginPage from './pages/login'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ContactPage from './pages/contact'
import BookPage from './pages/book'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>404 not found</div>,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'contact',
          element: <ContactPage />
        },
        {
          path: 'bookpage',
          element: <BookPage />
        }
      ]
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
