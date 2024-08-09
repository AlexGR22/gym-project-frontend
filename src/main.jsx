import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GymProvider } from './context/GymProvider'
import Layout from './components/Layout'
import AdminLayout from './components/AdminLayout'
import Index from './pages/Index'
import About from './pages/About'
import ErrorPage from './components/ErrorPage'
import ClientPage from './pages/ClientPage'
import NewClient,{action as newClientAction} from './pages/NewClient'
import AdminPage, { loader as clientsLoader } from './pages/AdminPage'
import EditClient, {loader as getClientLoader, action as editClienteAction} from './pages/EditClient'
import {action as deleteClientAction} from './components/Client'
import './index.css'


const router = createBrowserRouter([
  {
    patth: '/',
    children: [
      {index: true,
        element: <Index />,
        errorElement: <ErrorPage />
      },
      {
        path: '/About',
        element: <About />,
        errorElement: <ErrorPage />
      }
    ],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/client',
        element: <ClientPage />,
        errorElement: <ErrorPage />
      }
    ],
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        path: '/admin',
        element: <AdminPage />,
        loader: clientsLoader,
        errorElement: <ErrorPage />
      },
      {
        path : '/admin/registerclient',
        element : <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clientId/editar',
        element: <EditClient />,
        loader: getClientLoader,
        action: editClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/admin/delete/:clientId',
        action: deleteClientAction,
        errorElement: <ErrorPage />
      }
    ],
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GymProvider>
      <RouterProvider router={router} />
    </GymProvider>
  </StrictMode>,
)
