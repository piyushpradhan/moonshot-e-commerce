import { User } from 'types/user'

export const registerUser = async (user: User) => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export const loginUser = async ({
  username,
  password
}: {
  username: string
  password: string
}) => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/users', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    return response.json()
  } catch (error) {
    console.error(error)
  }
}
