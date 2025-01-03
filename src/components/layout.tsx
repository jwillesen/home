import { Outlet } from "react-router"
import Header from "./header"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <Header />
      <div className="flex-1 my-2">
        <main className="max-w-3xl mx-auto px-3">
          <Outlet />
        </main>
      </div>
      <footer className="bg-red-800 text-white px-3">
        <div className="py-2 max-w-4xl mx-auto">© 2025 by Jon Willesen</div>
      </footer>
    </div>
  )
}
