import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import { AuthProvider } from 'hooks/context/authContext'
import { CartProvider } from 'hooks/context/cartContext'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
)
