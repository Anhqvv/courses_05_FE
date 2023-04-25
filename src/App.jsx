import React, { useEffect, useState } from 'react'
import LoginPage from './pages/login'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ContactPage from './pages/contact'
import BookPage from './pages/book'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home'
import RegisterPage from './pages/register'
import { callFetchAccount } from './services/api'
import { useDispatch, useSelector } from 'react-redux'
import { doGetAccountAction } from './redux/account/accountSlice'
import Loading from './components/Loading'
import NotFound from './components/NotFound'
import AdminPage from './pages/admin'
import ProtectedRoute from './components/ProtectedRoute'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
const LayoutAdmin = () => {
  const isAdminRoute = window.location.pathname.startsWith('/admin')
  const user = useSelector(state => state.account.user)
  const userRole = user.role
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default function App () {
  const isAuthenticated = useSelector(state => state.account.isAuthenticated)
  const dispatch = useDispatch()
  const getAccount = async () => {
    if (window.location.pathname === '/login') {
      return
    }
    let res = await callFetchAccount()
    if (res && res.data) {
      dispatch(doGetAccountAction(res.data))
    }
  }
  useEffect(() => {
    getAccount()
  }, [])
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
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
      path: '/admin',
      element: <LayoutAdmin />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          )
        },
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
    },
    {
      path: '/register',
      element: <RegisterPage />
    }
  ])
  return (
    <>
      {isAuthenticated === true ||
      window.location.pathname === '/login' ||
      window.location.pathname === '/' ||
      window.location.pathname === '/admin' ? (
        <RouterProvider router={router} />
      ) : (
        <Loading />
      )}
    </>
  )
}
