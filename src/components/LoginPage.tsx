import { loginUser } from 'api/authentication'
import { useAuthContext } from 'hooks/context/authContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const authContext = useAuthContext()

  const navigate = useNavigate()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleUserLogin = async () => {
    const response = await loginUser({ username: username, password: password })
    console.log(response)
    if (response.id) {
      authContext?.udpateUser({ userId: response.id })
      navigate('/')
    } else {
      console.log(response)
    }
  }

  return (
    <section className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex w-full flex-col items-center">
          <h2 className="text-xl font-bold">Login</h2>
        </div>
        <div>
          <input
            className="w-full rounded border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600 focus:outline-none"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div>
          <input
            className="w-full rounded border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600 focus:outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div>
          <button
            onClick={handleUserLogin}
            className="w-full rounded bg-blue-600 py-4 text-sm font-bold text-gray-50 transition duration-200 hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
        <div className="flex w-full flex-col items-center text-sm">
          <span>
            Don&apos;t have an account ?{' '}
            <a href="/register" className="text-blue-700 underline">
              create one
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
