import { Bell, Search } from "lucide-react"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b bg-background px-4">
      {/* Sidebar Toggle */}
      <SidebarTrigger />

      <Separator orientation="vertical" className="h-6" />

      {/* Search */}
      <div className="relative hidden w-full max-w-sm md:block">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input placeholder="Search..." className="pl-9" />
      </div>

      {/* Right Actions */}
      <div className="ml-auto flex items-center gap-2">
        {/* Notifications */}
        <ModeToggle />
        <Button variant="ghost" size="icon">
          <Bell />
          <span className="sr-only">Notifications</span>
        </Button>

        {/* User */}
        <div className="flex items-center gap-2 border-l pl-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-muted text-sm font-medium">
            AU
          </div>

          <div className="hidden text-sm md:block">
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  )
}
