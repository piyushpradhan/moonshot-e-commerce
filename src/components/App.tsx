import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ProductPage from './ProductPage'
import { productLoader } from 'utils/loaders'
import CartPage from './CartPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
    loader: productLoader
  },
  {
    path: '/cart',
    element: <CartPage />
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
