import { useNavigate } from 'react-router-dom'
import { Product } from 'types/product'

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate()

  const navigateToProductPage = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div
      className="col-span-1 h-full w-full cursor-pointer overflow-hidden rounded shadow-lg"
      onClick={navigateToProductPage}
    >
      <img
        className="w-full object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{product.title}</div>
        <p className="text-base text-gray-700">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {product.category}
        </span>
        <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {product.price}
        </span>
      </div>
    </div>
  )
}

export default ProductCard
