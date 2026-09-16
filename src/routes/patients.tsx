import { createFileRoute } from "@tanstack/react-router"
import Patients from "@/pages/patients"

export const Route = createFileRoute("/patients")({
  component: Patients,
})
