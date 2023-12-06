'use client'

import { redirect } from 'next/navigation'

import { useAuthContext } from '@/app/AuthContext'
import { signInWithGoogle } from '@/services/auth'

export default function LoginPage() {
  const { user } = useAuthContext()

  if (user) {
    redirect('/panel/admin')
  }

  return (
    <div className="flex justify-center items-center">
      <button onClick={signInWithGoogle}>Authentification</button>
    </div>
  )
}
