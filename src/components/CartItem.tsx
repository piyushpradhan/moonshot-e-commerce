import { useCartContext } from 'hooks/context/cartContext'
import { Product } from 'types/product'

type CartItemProps = {
  product: Product
  quantity: number
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const cartContext = useCartContext()

  const increaseQuantity = () => {
    cartContext?.increaseQuantity(product)
  }

  const decreaseQuantity = () => {
    cartContext?.decreaseQuantity(product)
  }

  return (
    <div className="flex items-center justify-between border-b px-4 py-2">
      <div>
        <h2 className="font-bold">{product.title}</h2>
        <p className="text-gray-700">{product.price}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={decreaseQuantity}
          className="mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="ml-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem
