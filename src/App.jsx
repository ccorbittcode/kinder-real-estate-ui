import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Property from './pages/Property'
import Edit from './pages/Edit'
import Contact from './pages/Contact'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import Results from './pages/Results'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/property/:id",
        element: <Property />,
      },
      {
        path: "/property/:id/edit",
        element: <ProtectedRoute><Edit /></ProtectedRoute>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
      {
        path: "/edit/:id",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
      {
        path: "/results",
        element: <Results />,
      },
      {
        path: "/signup",
        element: <ProtectedRoute><Signup /></ProtectedRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  },

]);

function App() {
  return (
        <RouterProvider router={router} />
  )
}

export default App
