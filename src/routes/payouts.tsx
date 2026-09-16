import { createFileRoute } from "@tanstack/react-router"
import PayoutsPage from "@/pages/payouts"

export const Route = createFileRoute("/payouts")({
  component: PayoutsPage,
})
