import { useAuthContext } from 'hooks/context/authContext'
import { useState } from 'react'
import DebouncedSearchInput from './DebouncedInput'
import { useNavigate } from 'react-router-dom'

const TopNavbar = ({
  searchProduct
}: {
  searchProduct?: (value: string) => void
}) => {
  const navigate = useNavigate()
  const authContext = useAuthContext()

  const [search, setSearch] = useState<string>('')

  return (
    <div className="fixed flex h-16 w-full items-center justify-between bg-white/10 py-4 px-8 shadow-md backdrop-blur-md">
      <a href="/" className="text-2xl font-semibold">
        Moonshot store
      </a>
      {searchProduct && (
        <DebouncedSearchInput
          type="text"
          placeholder="Search..."
          className="w-full max-w-2xl rounded-md border border-gray-300 py-2 px-4 focus:outline-none"
          value={search}
          onChange={searchProduct}
        />
      )}
      {authContext?.user.userId ? (
        <button className="rounded-md bg-black py-2 px-6 font-semibold text-white focus:outline-none">
          Login
        </button>
      ) : (
        <button
          onClick={(e) => {
            navigate('/cart')
          }}
          className="rounded-md bg-black py-2 px-6 font-semibold text-white focus:outline-none"
        >
          Cart
        </button>
      )}
    </div>
  )
}

export default TopNavbar
