import { createFileRoute } from "@tanstack/react-router"
import DashboardPage from "@/pages/dashboard"
// import AppointmentsPage from "@/pages/appointments"

export const Route = createFileRoute("/")({
  component: DashboardPage,
})
