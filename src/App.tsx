import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet, useRouterState } from "@tanstack/react-router"

function App() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  // Authentication pages intentionally sit outside the authenticated admin shell.
  if (pathname === "/login") {
    return <Outlet />
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <Header />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
