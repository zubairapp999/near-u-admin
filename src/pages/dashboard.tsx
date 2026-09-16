import { CalendarDays, Clock, DollarSign, Users, Video } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Total Patients",
    value: "1,284",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Appointments",
    value: "328",
    change: "+8.2%",
    icon: CalendarDays,
  },
  {
    title: "Video Consultations",
    value: "146",
    change: "+15.3%",
    icon: Video,
  },
  {
    title: "Total Earnings",
    value: "₹84,250",
    change: "+10.8%",
    icon: DollarSign,
  },
]

const appointments = [
  {
    patient: "Rahul Sharma",
    type: "Video Consultation",
    time: "09:30 AM",
    status: "Confirmed",
  },
  {
    patient: "Priya Verma",
    type: "Clinic Visit",
    time: "10:15 AM",
    status: "Confirmed",
  },
  {
    patient: "Amit Kumar",
    type: "Video Consultation",
    time: "11:00 AM",
    status: "Pending",
  },
  {
    patient: "Neha Singh",
    type: "Clinic Visit",
    time: "12:30 PM",
    status: "Confirmed",
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>

        <p className="text-sm text-muted-foreground">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>

                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>

                <p className="mt-1 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {stat.change}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Appointments */}
        <Card className="lg:col-span-5">
          <CardHeader>
            <CardTitle>Today's Appointments</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={`${appointment.patient}-${appointment.time}`}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-muted">
                      <Clock className="size-4" />
                    </div>

                    <div>
                      <p className="font-medium">{appointment.patient}</p>

                      <p className="text-sm text-muted-foreground">
                        {appointment.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">
                      {appointment.time}
                    </span>

                    <Badge
                      variant={
                        appointment.status === "Confirmed"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Quick Overview</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div>
              <p className="text-sm text-muted-foreground">
                Pending Appointments
              </p>

              <p className="mt-1 text-2xl font-bold">12</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Completed Today</p>

              <p className="mt-1 text-2xl font-bold">24</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Pending Payout</p>

              <p className="mt-1 text-2xl font-bold">₹18,450</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Average Rating</p>

              <p className="mt-1 text-2xl font-bold">4.8 ⭐</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
