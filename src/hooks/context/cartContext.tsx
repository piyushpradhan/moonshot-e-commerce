import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import { CartProductType, Product } from 'types/product'

type CartContextType = {
  cart: CartStateType
  addToCart: (product: Product) => void
  increaseQuantity: (product: Product) => void
  decreaseQuantity: (product: Product) => void
}

type CartStateType = {
  cart: CartProductType[]
}

const initialState: CartStateType = {
  cart: []
}

function getInitialState() {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : initialState
}

const cartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartStateType>(getInitialState())

  useEffect(() => {
    // delete all items with quantity 0
    setCart((prev) => ({
      ...prev,
      cart: prev.cart.filter((item) => item.quantity > 0)
    }))
    localStorage.setItem(
      'cart',
      JSON.stringify({
        ...cart,
        cart: cart.cart.filter((item) => item.quantity > 0)
      })
    )
  }, [])

  const addToCart = (product: Product) => {
    let productExists = false
    cart.cart.map((item) => {
      if (item.product.id === product.id) {
        productExists = true
      }
      return item
    })

    if (!productExists) {
      setCart((prev) => ({
        ...prev,
        cart: [...prev.cart, { product: product, quantity: 1 }]
      }))
      localStorage.setItem(
        'cart',
        JSON.stringify({
          ...cart,
          cart: [...cart.cart, { product: product, quantity: 1 }]
        })
      )
    } else {
      setCart((prev) => ({
        ...prev,
        cart: prev.cart.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      }))
      localStorage.setItem(
        'cart',
        JSON.stringify({
          ...cart,
          cart: cart.cart.map((item) => {
            if (item.product.id === product.id) {
              return { ...item, quantity: item.quantity + 1 }
            }
            return item
          })
        })
      )
    }
  }

  const increaseQuantity = (product: Product) => {
    setCart((prev) => ({
      ...prev,
      cart: prev.cart.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    }))
    localStorage.setItem(
      'cart',
      JSON.stringify({
        ...cart,
        cart: cart.cart.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      })
    )
  }

  const decreaseQuantity = (product: Product) => {
    setCart((prev) => ({
      ...prev,
      cart: prev.cart.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 0
          }
        }
        return item
      })
    }))
    localStorage.setItem(
      'cart',
      JSON.stringify({
        ...cart,
        cart: cart.cart.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        })
      })
    )
  }

  return (
    <cartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity
      }}
    >
      {children}
    </cartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(cartContext)
}
