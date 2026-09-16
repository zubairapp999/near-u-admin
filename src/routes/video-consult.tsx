import { createFileRoute } from "@tanstack/react-router"
import VideoConsultPage from "@/pages/video-consult"

export const Route = createFileRoute("/video-consult")({
  component: VideoConsultPage,
})
