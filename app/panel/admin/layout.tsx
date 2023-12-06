'use client'

import { PropsWithChildren } from 'react'

import { signOut } from '@firebase/auth'
import { redirect } from 'next/navigation'

import { useAuthContext } from '@/app/AuthContext'
import { auth } from '@/services/firebase'

export default function AdminLayout({ children }: PropsWithChildren) {
  const { user } = useAuthContext()

  if (!user) {
    redirect('/panel/login')
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.')
      })
      .catch((error) => {
        // An error happened.
        console.log('An error happened.', error)
      })
  }
  return (
    <main className="h-screen">
      <button onClick={handleLogout}>Logout</button>
      {children}
    </main>
  )
}
