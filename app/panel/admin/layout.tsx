'use client'

import { PropsWithChildren } from 'react'

import { redirect } from 'next/navigation'

import { useAuthContext } from '@/app/AuthContext'
import { signOut } from '@/services/auth'

export default function AdminLayout({ children }: PropsWithChildren) {
  const { user } = useAuthContext()

  if (!user) {
    redirect('/panel/login')
  }

  return (
    <main className="h-screen">
      <button onClick={signOut}>Logout</button>
      {children}
    </main>
  )
}
