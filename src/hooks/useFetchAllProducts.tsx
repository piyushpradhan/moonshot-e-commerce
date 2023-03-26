import { fetchAllProducts } from 'api/product'
import { useEffect, useState } from 'react'
import { Product } from 'types/product'

const useFetchAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchAllProducts().then((products) => {
      if (products) {
        setProducts(products)
      }
    })
  }, [])

  return { products, setProducts }
}

export default useFetchAllProducts
