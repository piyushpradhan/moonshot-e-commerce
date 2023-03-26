export const fetchAllProducts = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export const fetchProduct = async (id: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/products/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    return response.json()
  } catch (error) {
    console.error(error)
  }
}
