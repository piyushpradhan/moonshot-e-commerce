import { ReactNode, createContext, useContext, useState } from 'react'
import { CartProductType, Product } from 'types/product'

type CartContextType = {
  cart: CartStateType
  addToCart: (product: Product) => void
}

type CartStateType = {
  cart: CartProductType[]
}

const initialState: CartStateType = {
  cart: []
}

const cartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartStateType>(initialState)

  const addToCart = (product: Product) => {
    setCart((prev) => ({
      ...prev,
      cart: [...prev.cart, { product: product, quantity: 1 }]
    }))
  }

  return (
    <cartContext.Provider value={{ cart: cart, addToCart: addToCart }}>
      {children}
    </cartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(cartContext)
}
