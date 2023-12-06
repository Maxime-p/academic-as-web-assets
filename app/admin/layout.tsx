import { PropsWithChildren } from 'react'

export default function AdminLayout({ children }: PropsWithChildren) {
  return <main className="h-screen">{children}</main>
}
