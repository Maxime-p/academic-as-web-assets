'use client'

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { User, onAuthStateChanged } from '@firebase/auth'

import { auth } from '@/services/firebase'

const AuthContext = createContext<{ user: User | null }>({ user: null })
export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <></> : children}
    </AuthContext.Provider>
  )
}
