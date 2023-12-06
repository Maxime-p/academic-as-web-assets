import { PropsWithChildren } from 'react'

import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Academic All-Stars',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <body className="font-sans m-0 overflow-hidden">{children}</body>
    </html>
  )
}
