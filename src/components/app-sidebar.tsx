import {
  CalendarDays,
  ClipboardList,
  CreditCard,
  DollarSign,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Settings,
  UserCircle,
  Users,
  Video,
  Wallet,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Appointments", url: "/appointments", icon: CalendarDays },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Video Consult", url: "/video-consult", icon: Video },
  { title: "Prescriptions", url: "/prescriptions", icon: FileText },
  { title: "Service & Fees", url: "/service-fees", icon: CreditCard },
  { title: "Availability", url: "/availability", icon: ClipboardList },
  { title: "Reviews", url: "/reviews", icon: MessageSquare },
  { title: "Earnings", url: "/earnings", icon: DollarSign },
  { title: "Payouts", url: "/payouts", icon: Wallet },
  { title: "Public Profile", url: "/profile", icon: UserCircle },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-4 py-4">
          <h1 className="text-lg font-semibold">Near-U</h1>
          <p className="text-xs text-muted-foreground">Admin Dashboard</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <a
                      href={item.url}
                      className="flex w-full items-center gap-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a
                    href="/settings"
                    className="flex w-full items-center gap-2"
                  >
                    <Settings />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 p-3">
          <UserCircle className="size-8" />

          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@near-u.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
