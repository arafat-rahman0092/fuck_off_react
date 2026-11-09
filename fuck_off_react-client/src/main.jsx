import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import Home from './pages/Home'
import Products from './pages/Products'
import Productdetails from './pages/Productdetails'
import About from './pages/about'
import Login from './pages/Login'
import Singup from './pages/Singup'
import AddToCart from './pages/addtocart'

const router = createBrowserRouter([
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
