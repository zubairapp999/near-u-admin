import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "@tanstack/react-router"

function App() {
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
