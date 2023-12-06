'use client'

import { PropsWithChildren } from 'react'

import { AuthContextProvider } from '@/app/AuthContext'

export default function Layout({ children }: PropsWithChildren) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}
