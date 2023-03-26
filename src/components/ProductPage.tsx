import useFetchProduct from 'hooks/useFetchProduct'
import { useCartContext } from 'hooks/context/cartContext'
import { useLoaderData } from 'react-router-dom'
import { ProductLoaderType } from 'utils/loaders'
import TopNavbar from './TopNavbar'

function ProductPage(): JSX.Element {
  const cartContext = useCartContext()
  const params = useLoaderData() as ProductLoaderType

  const { product } = useFetchProduct({ productId: params.id })

  const handleAddToCart = () => {
    cartContext?.addToCart(product)
  }
  return (
    <div className="h-full w-full">
      <TopNavbar />
      <div className="container mx-auto flex w-full pt-20">
        <div className="w-1/2">
          <img
            className=" max-h-[40rem] w-full object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="w-1/2 px-8 py-4">
          <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
          <p className="mb-4 text-base text-gray-700">{product.description}</p>
          <div className="mb-4 flex items-center">
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              {product.category}
            </span>
            <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              {product.price}
            </span>
          </div>
          {product.id && (
            <button
              className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
