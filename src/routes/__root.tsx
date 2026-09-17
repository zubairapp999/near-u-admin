import { createRootRoute, redirect } from "@tanstack/react-router"
import App from "@/App"

export const Route = createRootRoute({
  component: App,
  beforeLoad: ({ location }) => {
    const isLoginPage = location.pathname === "/login"
    const isAuthenticated = sessionStorage.getItem("demo-authenticated") === "true"

    if (!isLoginPage && !isAuthenticated) {
      throw redirect({ to: "/login" })
    }
  },
})
