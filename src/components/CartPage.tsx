import React from 'react'
import { Product } from '../types/product'
import { useCartContext } from 'hooks/context/cartContext'
import TopNavbar from './TopNavbar'
import CartItem from './CartItem'

function CartPage(): JSX.Element {
  const cartContext = useCartContext()
  const items = cartContext?.cart.cart
  const totalPrice = items?.reduce(
    (total, item) => total + parseFloat(item.product.price) * item.quantity,
    0
  )

  return (
    <>
      <TopNavbar />
      <div className="mx-auto max-w-4xl pt-20">
        <h1 className="mb-4 text-3xl font-bold">Your Cart</h1>
        {items?.length ?? 0 > 0 ? (
          <>
            {items?.map((item) => (
              <CartItem
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
            <div className="flex items-center justify-between border-b px-4 py-2">
              <span className="font-bold">Total:</span>
              <span>${totalPrice?.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  )
}

export default CartPage
