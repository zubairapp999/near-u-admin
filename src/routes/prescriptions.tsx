import { createFileRoute } from "@tanstack/react-router"
import PrescriptionsPage from "@/pages/prescriptions"

export const Route = createFileRoute("/prescriptions")({
  component: PrescriptionsPage,
})
