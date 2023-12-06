'use client'

import { PropsWithChildren } from 'react'

export default function RLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-[1920px] h-[1080px] overflow-hidden">{children}</main>
  )
}
