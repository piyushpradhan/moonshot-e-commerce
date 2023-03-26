import React, { ReactNode, createContext, useContext, useState } from 'react'

type AuthStateType = {
  userId: string | null
}

type AuthContextType = {
  user: AuthStateType
  udpateUser: (user: AuthStateType) => void
}

const initialState: AuthStateType = {
  userId: null
}

function getInitialState() {
  const user = localStorage.getItem('user')
  if (user) {
    return JSON.parse(user)
  }
  return initialState
}

const authContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthStateType>({
    userId: getInitialState().userId
  })

  function updateUser(user: AuthStateType) {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <authContext.Provider value={{ user: user, udpateUser: updateUser }}>
      {children}
    </authContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(authContext)
}
