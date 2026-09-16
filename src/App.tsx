import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import Dashboard from "@/pages/dashboard"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <Header />

        <main className="flex-1 p-6">
          <Dashboard />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
