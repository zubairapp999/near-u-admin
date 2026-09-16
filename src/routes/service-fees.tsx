import { createFileRoute } from "@tanstack/react-router"
import ServiceFeesPage from "@/pages/service-fees"

export const Route = createFileRoute("/service-fees")({
  component: ServiceFeesPage,
})
