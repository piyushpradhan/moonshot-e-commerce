import { registerUser } from 'api/authentication'
import { useAuthContext } from 'hooks/context/authContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from 'types/user'

function RegisterPage() {
  const authContext = useAuthContext()

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState({
    first: '',
    last: ''
  })
  const [address, setAddress] = useState({
    city: '',
    street: '',
    zipcode: '',
    number: ''
  })
  const [phone, setPhone] = useState('')

  const handleUserRegistration = async () => {
    const newUser: User = {
      email: email,
      username: username,
      name: name,
      address: {
        city: address.city,
        street: address.street,
        number: parseInt(address.number),
        zipcode: address.zipcode,
        geolocation: {
          lat: 0,
          long: 0
        }
      },
      phone: phone
    }

    const response = await registerUser(newUser)
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
      <div className="flex w-full max-w-md flex-col space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex w-full flex-col items-center">
          <h2 className="text-xl font-bold">Register</h2>
        </div>
        <input
          className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <input
          className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
        <input
          className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <div className="flex w-full space-x-2">
          <input
            type="text"
            className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
            placeholder="First Name"
            value={name.first}
            onChange={(e) => setName({ ...name, first: e.currentTarget.value })}
          />
          <input
            type="text"
            className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
            placeholder="Last Name"
            value={name.last}
            onChange={(e) => setName({ ...name, last: e.currentTarget.value })}
          />
        </div>
        <input
          className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
          type="text"
          placeholder="City"
          value={address.city}
          onChange={(e) =>
            setAddress((prev) => ({
              ...prev,
              city: e.currentTarget?.value
            }))
          }
        />
        <input
          className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
          type="text"
          placeholder="Street"
          value={address.street}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, street: e.currentTarget?.value }))
          }
        />
        <input
          className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
          type="text"
          placeholder="zipcode"
          value={address.zipcode}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, zipcode: e.currentTarget?.value }))
          }
        />
        <input
          className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
          type="number"
          placeholder="number"
          value={address.number}
          onChange={(e) =>
            setAddress((prev) => ({
              ...prev,
              number: e.currentTarget?.value
            }))
          }
        />
        <input
          className="w-full rounded border border-gray-200 bg-gray-50 py-2 px-4 text-sm text-gray-600 focus:outline-none"
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
        />
        <button
          onClick={handleUserRegistration}
          className="w-full rounded bg-blue-600 py-4 text-sm font-bold text-gray-50 transition duration-200 hover:bg-blue-700"
        >
          Register
        </button>
        <div className="flex w-full flex-col items-center text-sm">
          <span>
            Existing user ?{' '}
            <a href="/login" className="text-blue-700 underline">
              login
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
