import useFetchAllProducts from 'hooks/useFetchAllProducts'
import TopNavbar from './TopNavbar'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from 'types/product'

function LandingPage(): JSX.Element {
  const { products, setProducts } = useFetchAllProducts()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  const searchProduct = (searchValue: string) => {
    if (searchValue === '' || searchValue === undefined) {
      setFilteredProducts(products)
      return
    }

    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    setFilteredProducts(filteredProducts)
  }

  return (
    <div className="w-screen">
      <TopNavbar searchProduct={searchProduct} />
      <div className="container mx-auto grid h-full w-full gap-4 pt-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default LandingPage
