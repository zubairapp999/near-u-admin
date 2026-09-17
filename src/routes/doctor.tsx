import { createFileRoute } from "@tanstack/react-router"
import ProfileAddPage from "@/pages/doctor"

export const Route = createFileRoute("/doctor")({
  component: ProfileAddPage,
})
