import useFetchAllProducts from 'hooks/useFetchAllProducts'
import TopNavbar from './TopNavbar'
import ProductCard from './ProductCard'

function LandingPage() {
  const { products, setProducts } = useFetchAllProducts()

  return (
    <div className="w-screen">
      <TopNavbar />
      <div className="container mx-auto grid h-full w-full gap-4 pt-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default LandingPage
