import {
  Activity,
  CheckCircle2,
  Download,
  Edit,
  MoreHorizontal,
  Search,
  Trash2,
  Video,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const videoConsults = [
  {
    reference: "#VC-1001",
    patient: "Neha Sharma",
    time: "09:30 AM",
    reason: "Follow-up Consultation",
    fee: "₹800",
    status: "Confirmed",
  },
  {
    reference: "#VC-1002",
    patient: "Rahul Sharma",
    time: "10:15 AM",
    reason: "General Consultation",
    fee: "₹1,000",
    status: "Waiting",
  },
  {
    reference: "#VC-1003",
    patient: "Priya Verma",
    time: "11:00 AM",
    reason: "Prescription Review",
    fee: "₹700",
    status: "Confirmed",
  },
  {
    reference: "#VC-1004",
    patient: "Amit Kumar",
    time: "12:30 PM",
    reason: "Follow-up Consultation",
    fee: "₹800",
    status: "Completed",
  },
  {
    reference: "#VC-1005",
    patient: "Riya Singh",
    time: "02:00 PM",
    reason: "Initial Consultation",
    fee: "₹1,200",
    status: "Pending",
  },
]

const activityData = [
  { day: "Mon", value: 82 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 61 },
  { day: "Thu", value: 48 },
  { day: "Fri", value: 36 },
  { day: "Sat", value: 25 },
  { day: "Sun", value: 20 },
]

export default function VideoConsult() {
  const chartWidth = 800
  const chartHeight = 150
  const paddingX = 20
  const paddingTop = 15
  const paddingBottom = 30

  const chartInnerWidth = chartWidth - paddingX * 2
  const chartInnerHeight = chartHeight - paddingTop - paddingBottom

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

  return (
    <div className="w-full min-w-0 space-y-6">
      {/* Page Header */}
      <Card className="w-full overflow-hidden">
        <CardHeader className="p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="mb-1 text-[10px] font-semibold tracking-widest text-emerald-600 uppercase">
                Workspace Module
              </p>

              <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">
                Video Consult
              </CardTitle>

              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Online consultation queue. Add, edit, search, filter and export
                records from here.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <Download className="size-4" />
                Export
              </button>

              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                <span className="text-base">+</span>
                Add Video Consult
              </button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Search & Filter */}
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
        <div className="relative min-w-0 flex-1">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search video consult..."
            className="h-10 w-full rounded-xl border border-slate-200 bg-white pr-4 pl-10 text-sm transition outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <select
          defaultValue="all"
          className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 transition outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 sm:w-[160px]"
        >
          <option value="all">All status</option>
          <option value="waiting">Waiting</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="min-w-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-2xl font-bold tracking-tight">0</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Total records
                </p>
              </div>

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Video className="size-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="min-w-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-2xl font-bold tracking-tight">0</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Active / completed
                </p>
              </div>

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <CheckCircle2 className="size-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="min-w-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-2xl font-bold tracking-tight">0</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Needs attention
                </p>
              </div>

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Activity className="size-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="min-w-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-2xl font-bold tracking-tight">Live</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Workspace status
                </p>
              </div>

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Video className="size-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Video Consult Table */}
      <Card className="min-w-0 overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[850px]">
              {/* Table Header */}
              <div className="grid grid-cols-[1.1fr_1.4fr_1fr_1.2fr_0.9fr_1fr_1.2fr] items-center border-b bg-slate-50 px-4 py-3 text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                <div>Reference</div>
                <div>Patient</div>
                <div>Time</div>
                <div>Reason</div>
                <div>Fee</div>
                <div>Status</div>
                <div>Actions</div>
              </div>

              {/* Empty State */}
              {videoConsults.length === 0 ? (
                <div className="flex min-h-[120px] items-center justify-center px-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    No records found. Use the Add button to create your first
                    record.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {videoConsults.map((consult) => (
                    <div
                      key={consult.reference}
                      className="grid grid-cols-[1.1fr_1.4fr_1fr_1.2fr_0.9fr_1fr_1.2fr] items-center px-4 py-4 transition-colors hover:bg-slate-50"
                    >
                      <div className="text-sm font-medium text-slate-600">
                        {consult.reference}
                      </div>

                      <div className="text-sm font-medium text-slate-800">
                        {consult.patient}
                      </div>

                      <div className="text-sm text-slate-500">
                        {consult.time}
                      </div>

                      <div className="text-sm text-slate-500">
                        {consult.reason}
                      </div>

                      <div className="text-sm text-slate-600">
                        {consult.fee}
                      </div>

                      <div>
                        <Badge className="border-0 bg-teal-100 text-teal-700 hover:bg-teal-100">
                          {consult.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          title="Edit consultation"
                          className="inline-flex size-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                        >
                          <Edit className="size-3.5" />
                        </button>

                        <button
                          type="button"
                          title="More"
                          className="inline-flex size-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
                        >
                          <MoreHorizontal className="size-3.5" />
                        </button>

                        <button
                          type="button"
                          title="Delete consultation"
                          className="inline-flex size-7 items-center justify-center rounded-lg border border-red-100 bg-white text-red-500 transition hover:bg-red-50"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="border-t bg-slate-50 px-4 py-2 text-center text-[11px] text-muted-foreground sm:hidden">
            Swipe horizontally to view all consultation details.
          </div>
        </CardContent>
      </Card>

      {/* Activity Chart */}
      <Card className="min-w-0 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">
            Video consultation activity
          </CardTitle>

          <p className="text-xs text-muted-foreground">
            Live visual summary from saved records
          </p>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="w-full overflow-hidden">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-[160px] w-full sm:h-[180px]"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="video-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b7cf6" stopOpacity="0.25" />

                  <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0.03" />
                </linearGradient>

                <linearGradient id="video-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22c55e" />

                  <stop offset="100%" stopColor="#2dd4bf" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 1, 2].map((line) => {
                const y = paddingTop + (chartInnerHeight / 2) * line

                return (
                  <line
                    key={line}
                    x1={paddingX}
                    x2={chartWidth - paddingX}
                    y1={y}
                    y2={y}
                    stroke="currentColor"
                    strokeOpacity="0.12"
                    className="text-slate-500"
                  />
                )
              })}

              {/* Area */}
              <path d={areaPath} fill="url(#video-area)" />

              {/* Line */}
              <path
                d={linePath}
                fill="none"
                stroke="url(#video-line)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Points */}
              {chartPoints.map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="3"
                  fill="#4fd1c5"
                />
              ))}

              {/* Day Labels */}
              {activityData.map((item, index) => {
                const x =
                  paddingX +
                  (index / (activityData.length - 1)) * chartInnerWidth

                return (
                  <text
                    key={item.day}
                    x={x}
                    y={chartHeight - 8}
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
    </div>
  )
}
