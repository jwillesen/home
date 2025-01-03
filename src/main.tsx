import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "./components/layout.tsx"
import Home from "./pages/home.tsx"
import Resume from "./pages/resume.tsx"

import "./index.css"
import "@fortawesome/fontawesome-pro/css/fontawesome.min.css"
import "@fortawesome/fontawesome-pro/css/brands.min.css"
import "@fortawesome/fontawesome-pro/css/regular.min.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
