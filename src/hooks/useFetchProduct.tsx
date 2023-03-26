import { fetchProduct } from 'api/product'
import { useEffect, useState } from 'react'
import { Product } from 'types/product'

const useFetchProduct = ({ productId }: { productId: string }) => {
  const [product, setProduct] = useState<Product>({} as Product)

  useEffect(() => {
    fetchProduct(productId).then((product) => {
      if (product) {
        setProduct(product)
      }
    })
  }, [])

  return { product, setProduct }
}

export default useFetchProduct
