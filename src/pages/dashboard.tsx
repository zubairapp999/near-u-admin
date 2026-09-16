// import { CalendarDays, Clock, DollarSign, Users, Video } from "lucide-react"

// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// // const stats = [
// //   {
// //     title: "Total Patients",
// //     value: "1,284",
// //     change: "+12.5%",
// //     icon: Users,
// //   },
// //   {
// //     title: "Appointments",
// //     value: "328",
// //     change: "+8.2%",
// //     icon: CalendarDays,
// //   },
// //   {
// //     title: "Video Consultations",
// //     value: "146",
// //     change: "+15.3%",
// //     icon: Video,
// //   },
// //   {
// //     title: "Total Earnings",
// //     value: "₹84,250",
// //     change: "+10.8%",
// //     icon: DollarSign,
// //   },
// // ]

// const stats = [
//   {
//     title: "Appointments Today",
//     value: "18",
//     change: "4 upcoming",
//     icon: CalendarDays,
//   },
//   {
//     title: "Video Consults",
//     value: "6",
//     change: "2 waiting",
//     icon: Video,
//   },
//   {
//     title: "Patients",
//     value: "1,248",
//     change: "+34 this month",
//     icon: Users,
//   },
//   {
//     title: "Earnings Today",
//     value: "₹12,600",
//     change: "+9.8%",
//     icon: DollarSign,
//   },
// ]

// const appointments = [
//   {
//     patient: "Rahul Sharma",
//     type: "Video Consultation",
//     time: "09:30 AM",
//     status: "Confirmed",
//   },
//   {
//     patient: "Priya Verma",
//     type: "Clinic Visit",
//     time: "10:15 AM",
//     status: "Confirmed",
//   },
//   {
//     patient: "Amit Kumar",
//     type: "Video Consultation",
//     time: "11:00 AM",
//     status: "Pending",
//   },
//   {
//     patient: "Neha Singh",
//     type: "Clinic Visit",
//     time: "12:30 PM",
//     status: "Confirmed",
//   },
// ]

// export default function Dashboard() {
//   return (
//     <div className="space-y-6">
//       {/* Page Header */}
//       <div>
//         <h1 className="text-2xl font-semibold tracking-tight">
//           Doctor Practice Command Center
//         </h1>

//         <p className="text-sm text-muted-foreground">
//           Welcome back, Dr. Ankit Verma • Everything you need in one
//           professional workspace.
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat) => {
//           const Icon = stat.icon

//           return (
//             <Card key={stat.title}>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   {stat.title}
//                 </CardTitle>

//                 <Icon className="size-4 text-muted-foreground" />
//               </CardHeader>

//               <CardContent>
//                 <div className="text-2xl font-bold">{stat.value}</div>

//                 <p className="mt-1 text-xs text-muted-foreground">
//                   <span className="font-medium text-foreground">
//                     {stat.change}
//                   </span>{" "}
//                 </p>
//               </CardContent>
//             </Card>
//           )
//         })}
//       </div>

//       {/* Main Content */}
//       <div className="grid gap-6 lg:grid-cols-7">
//         {/* Appointments */}
//         <Card className="lg:col-span-5">
//           <CardHeader>
//             <CardTitle>Today's Appointments</CardTitle>
//           </CardHeader>

//           <CardContent>
//             <div className="space-y-4">
//               {appointments.map((appointment) => (
//                 <div
//                   key={`${appointment.patient}-${appointment.time}`}
//                   className="flex items-center justify-between rounded-lg border p-4"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="flex size-10 items-center justify-center rounded-full bg-muted">
//                       <Clock className="size-4" />
//                     </div>

//                     <div>
//                       <p className="font-medium">{appointment.patient}</p>

//                       <p className="text-sm text-muted-foreground">
//                         {appointment.type}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <span className="text-sm font-medium">
//                       {appointment.time}
//                     </span>

//                     <Badge
//                       variant={
//                         appointment.status === "Confirmed"
//                           ? "default"
//                           : "secondary"
//                       }
//                     >
//                       {appointment.status}
//                     </Badge>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Quick Overview */}
//         <Card className="lg:col-span-2">
//           <CardHeader>
//             <CardTitle>Quick Overview</CardTitle>
//           </CardHeader>

//           <CardContent className="space-y-5">
//             <div>
//               <p className="text-sm text-muted-foreground">
//                 Pending Appointments
//               </p>

//               <p className="mt-1 text-2xl font-bold">12</p>
//             </div>

//             <div>
//               <p className="text-sm text-muted-foreground">Completed Today</p>

//               <p className="mt-1 text-2xl font-bold">24</p>
//             </div>

//             <div>
//               <p className="text-sm text-muted-foreground">Pending Payout</p>

//               <p className="mt-1 text-2xl font-bold">₹18,450</p>
//             </div>

//             <div>
//               <p className="text-sm text-muted-foreground">Average Rating</p>

//               <p className="mt-1 text-2xl font-bold">4.8 ⭐</p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//     </div>
//   )
// }

import {
  CalendarDays,
  Clock,
  DollarSign,
  Download,
  Users,
  Video,
  ArrowRight,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Appointments Today",
    value: "18",
    change: "4 upcoming",
    icon: CalendarDays,
  },
  {
    title: "Video Consults",
    value: "6",
    change: "2 waiting",
    icon: Video,
  },
  {
    title: "Patients",
    value: "1,248",
    change: "+34 this month",
    icon: Users,
  },
  {
    title: "Earnings Today",
    value: "₹12,600",
    change: "+9.8%",
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

const activityData = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 57 },
  { day: "Wed", value: 52 },
  { day: "Thu", value: 69 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 82 },
  { day: "Sun", value: 78 },
]

const workspaceRecords = [
  {
    label: "Appointments",
    value: 28,
    color: "#22c55e",
  },
  {
    label: "Patients",
    value: 24,
    color: "#2dd4bf",
  },
  {
    label: "Video Consult",
    value: 18,
    color: "#f6bd55",
  },
  {
    label: "Prescriptions",
    value: 14,
    color: "#fb7185",
  },
  {
    label: "Services & Fees",
    value: 22,
    color: "#5b8def",
  },
]

const workspaceModules = [
  {
    title: "Appointments",
    description: "Bookings, slots & status",
    icon: CalendarDays,
  },
  {
    title: "Patients",
    description: "Profiles & consultation history",
    icon: Users,
  },
  {
    title: "Video Consult",
    description: "Online consultation queue",
    icon: Video,
  },
  {
    title: "Prescriptions",
    description: "Create & print digital Rx",
    icon: "Rx",
  },
  {
    title: "Service & Fees",
    description: "Consultation types & fees",
    icon: "✦",
  },
  {
    title: "Availability",
    description: "Weekly schedule & slots",
    icon: "↗",
  },
  {
    title: "Reviews",
    description: "Patient feedback & replies",
    icon: "★",
  },
  {
    title: "Earnings",
    description: "Consultation revenue",
    icon: "₹",
  },
  {
    title: "Payouts",
    description: "Bank settlements",
    icon: "↔",
  },
  {
    title: "Public Profile",
    description: "Clinic profile & verification",
    icon: "▦",
  },
  {
    title: "Settings",
    description: "Account & notifications",
    icon: "⚙",
  },
]

const recentActivity = [
  {
    module: "Services & Fees",
    record: "Clinic Consultation",
    status: "Active",
    updated: "9/14/2026",
  },
  {
    module: "Patients",
    record: "Neha Sharma",
    status: "Active",
    updated: "9/14/2026",
  },
  {
    module: "Appointments",
    record: "Neha Sharma",
    status: "Confirmed",
    updated: "9/14/2026",
  },
]

export default function Dashboard() {
  /*
   * Business Performance chart calculations
   */
  const chartWidth = 600
  const chartHeight = 220
  const paddingX = 20
  const paddingTop = 20
  const paddingBottom = 35

  const chartInnerHeight = chartHeight - paddingTop - paddingBottom

  const chartInnerWidth = chartWidth - paddingX * 2

  const chartPoints = activityData.map((item, index) => {
    const x = paddingX + (index / (activityData.length - 1)) * chartInnerWidth

    const y =
      paddingTop + chartInnerHeight - (item.value / 100) * chartInnerHeight

    return { x, y }
  })

  const linePath = chartPoints
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ")

  const areaPath = `
    ${linePath}
    L ${chartPoints[chartPoints.length - 1].x} ${paddingTop + chartInnerHeight}
    L ${chartPoints[0].x} ${paddingTop + chartInnerHeight}
    Z
  `

  /*
   * Workspace Mix calculations
   */
  const totalRecords = workspaceRecords.reduce(
    (sum, item) => sum + item.value,
    0
  )

  const donutRadius = 54
  const donutCircumference = 2 * Math.PI * donutRadius

  let donutOffset = 0

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Doctor Practice Command Center
        </h1>

        <p className="text-sm text-muted-foreground">
          Welcome back, Dr. Ankit Verma • Everything you need in one
          professional workspace.
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
                  </span>
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Business Analytics */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Business Performance */}
        <Card className="lg:col-span-5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <CardTitle className="text-sm font-semibold">
                Business performance
              </CardTitle>

              <span className="text-xs text-muted-foreground">
                7-day activity trend
              </span>
            </div>

            <button
              type="button"
              className="flex h-10 items-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-medium text-white transition hover:bg-slate-800"
            >
              <Download className="size-3.5" />
              Export report
            </button>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="w-full overflow-hidden">
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="h-[220px] w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Area gradient */}
                  <linearGradient
                    id="performance-area"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#8b7cf6" stopOpacity="0.35" />

                    <stop
                      offset="100%"
                      stopColor="#8b7cf6"
                      stopOpacity="0.04"
                    />
                  </linearGradient>

                  {/* Line gradient */}
                  <linearGradient
                    id="performance-line"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#22c55e" />

                    <stop offset="100%" stopColor="#2dd4bf" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                {[0, 1, 2, 3].map((line) => {
                  const y = paddingTop + (chartInnerHeight / 3) * line

                  return (
                    <line
                      key={line}
                      x1={paddingX}
                      x2={chartWidth - paddingX}
                      y1={y}
                      y2={y}
                      stroke="currentColor"
                      strokeOpacity="0.45"
                      className="text-slate-500"
                    />
                  )
                })}

                {/* Area */}
                <path d={areaPath} fill="url(#performance-area)" />

                {/* Performance Line */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="url(#performance-line)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points */}
                {chartPoints.map((point, index) => (
                  <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="3"
                    fill="#4fd1c5"
                  />
                ))}

                {/* Days */}
                {activityData.map((item, index) => {
                  const x =
                    paddingX +
                    (index / (activityData.length - 1)) * chartInnerWidth

                  return (
                    <text
                      key={item.day}
                      x={x}
                      y={chartHeight - 10}
                      textAnchor="middle"
                      className="fill-slate-400 text-[10px]"
                    >
                      {item.day}
                    </text>
                  )
                })}
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Workspace Mix */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-1">
              <CardTitle className="text-sm font-semibold">
                Workspace mix
              </CardTitle>

              <span className="text-xs text-muted-foreground">
                Records across modules
              </span>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-center gap-5">
              {/* Donut Chart */}
              <div className="relative size-[150px] shrink-0">
                <svg viewBox="0 0 150 150" className="size-full -rotate-90">
                  {workspaceRecords.map((item) => {
                    const segmentLength =
                      (item.value / totalRecords) * donutCircumference

                    const currentOffset = donutOffset

                    donutOffset += segmentLength

                    return (
                      <circle
                        key={item.label}
                        cx="75"
                        cy="75"
                        r={donutRadius}
                        fill="none"
                        stroke={item.color}
                        strokeWidth="27"
                        strokeDasharray={`${segmentLength} ${
                          donutCircumference - segmentLength
                        }`}
                        strokeDashoffset={-currentOffset}
                      />
                    )
                  })}
                </svg>

                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[11px] text-muted-foreground">
                    records
                  </span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                {workspaceRecords.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span
                      className="size-2 shrink-0"
                      style={{
                        backgroundColor: item.color,
                      }}
                    />

                    <span className="text-[10px] whitespace-nowrap text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
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

      {/* Workspace Modules */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
        <Card className="min-w-0 overflow-hidden lg:col-span-7">
          <CardHeader className="pb-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Heading */}
              <div className="min-w-0">
                <CardTitle className="text-xl font-semibold">
                  Manage your workspace
                </CardTitle>

                <p className="mt-1 max-w-2xl text-sm leading-5 text-muted-foreground">
                  Every feature is available from one place. Open a module to
                  add or manage records.
                </p>
              </div>

              {/* Add Button */}
              <button
                type="button"
                className="inline-flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 sm:w-auto"
              >
                <span className="text-base">+</span>
                Add New
              </button>
            </div>
          </CardHeader>

          <CardContent className="px-3 sm:px-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {workspaceModules.map((module) => {
                const isComponentIcon = typeof module.icon !== "string"

                const Icon = isComponentIcon ? module.icon : null

                return (
                  <button
                    key={module.title}
                    type="button"
                    className="group flex min-h-[72px] w-full min-w-0 items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
                  >
                    {/* Left Content */}
                    <div className="flex min-w-0 items-center gap-3">
                      {/* Icon */}
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 sm:size-11 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400">
                        {Icon ? (
                          <Icon className="size-4" />
                        ) : (
                          <span className="text-sm font-medium">
                            {module.icon}
                          </span>
                        )}
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {module.title}
                        </p>

                        <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="ml-2 size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-200" />
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-7">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-1">
              <CardTitle className="text-sm font-semibold">
                Recent activity
              </CardTitle>

              <span className="text-xs text-muted-foreground">
                Latest updates across your workspace
              </span>
            </div>
          </CardHeader>

          <CardContent>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-[10px] font-medium tracking-wider text-slate-500 uppercase">
                <div>Module</div>
                <div>Record</div>
                <div>Status</div>
                <div>Updated</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-200">
                {recentActivity.map((activity) => (
                  <div
                    key={`${activity.module}-${activity.record}-${activity.status}`}
                    className="grid grid-cols-4 items-center px-4 py-4 transition-colors hover:bg-slate-50"
                  >
                    {/* Module */}
                    <div className="text-sm font-medium text-slate-700">
                      {activity.module}
                    </div>

                    {/* Record */}
                    <div className="text-sm text-slate-700">
                      {activity.record}
                    </div>

                    {/* Status */}
                    <div>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                          activity.status === "Confirmed"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-teal-100 text-teal-700"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>

                    {/* Updated */}
                    <div className="text-sm text-slate-500">
                      {activity.updated}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
