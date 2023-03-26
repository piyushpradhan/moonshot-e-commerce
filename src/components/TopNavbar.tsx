import { useAuthContext } from 'hooks/context/authContext'
import { useState } from 'react'

const TopNavbar = () => {
  const authContext = useAuthContext()

  const [search, setSearch] = useState<string>('')

  return (
    <div className="fixed flex h-16 w-full items-center justify-between bg-white/10 py-4 px-8 shadow-md backdrop-blur-md">
      <p className="text-2xl font-semibold">Moonshot store</p>
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-2xl rounded-md border border-gray-300 py-2 px-4 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      {authContext?.user.userId && (
        <button className="rounded-md bg-black p-2 text-white focus:outline-none">
          Login
        </button>
      )}
    </div>
  )
}

export default TopNavbar
