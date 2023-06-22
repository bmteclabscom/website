import { Dashboard } from '@/pages/Dashboard'
import { Navigate, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/*',
    element: <Navigate replace to="/" />,
  },
])
