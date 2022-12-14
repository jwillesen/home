import type { ReactNode } from 'react'
import Header from './header'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <Header />
      <div className="flex-1 my-2">
        <main className="max-w-3xl mx-auto">{children}</main>
      </div>
      <footer className="bg-blue-600 text-white">
        <div className="py-2 max-w-4xl mx-auto">© 2022 by Jon Willesen</div>
      </footer>
    </div>
  )
}
