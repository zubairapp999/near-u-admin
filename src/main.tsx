// import { StrictMode } from "react"
// import { createRoot } from "react-dom/client"

// import "./index.css"
// import App from "./App.tsx"
// import { ThemeProvider } from "@/components/theme-provider.tsx"

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
//       <App />
//     </ThemeProvider>
//   </StrictMode>
// )

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createRouter, RouterProvider } from "@tanstack/react-router"

import { routeTree } from "./routeTree.gen"
import { ThemeProvider } from "@/components/theme-provider"
import "./index.css"

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
