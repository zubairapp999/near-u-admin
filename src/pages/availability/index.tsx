import {
  Activity,
  CheckCircle2,
  Clock,
  Download,
  Edit,
  MoreHorizontal,
  Search,
  Trash2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const availability = [
  {
    reference: "#AV-1001",
    day: "Monday",
    slots: "09:00 AM - 01:00 PM",
    mode: "Clinic",
    dailyLimit: "12",
    status: "Active",
  },
  {
    reference: "#AV-1002",
    day: "Tuesday",
    slots: "10:00 AM - 02:00 PM",
    mode: "Online",
    dailyLimit: "10",
    status: "Active",
  },
  {
    reference: "#AV-1003",
    day: "Wednesday",
    slots: "09:30 AM - 01:30 PM",
    mode: "Clinic",
    dailyLimit: "15",
    status: "Active",
  },
  {
    reference: "#AV-1004",
    day: "Thursday",
    slots: "02:00 PM - 06:00 PM",
    mode: "Online",
    dailyLimit: "8",
    status: "Active",
  },
  {
    reference: "#AV-1005",
    day: "Friday",
    slots: "09:00 AM - 12:00 PM",
    mode: "Clinic",
    dailyLimit: "10",
    status: "Active",
  },
  {
    reference: "#AV-1006",
    day: "Saturday",
    slots: "10:00 AM - 01:00 PM",
    mode: "Clinic",
    dailyLimit: "8",
    status: "Inactive",
  },
]

const activityData = [
  { day: "Mon", value: 76 },
  { day: "Tue", value: 68 },
  { day: "Wed", value: 62 },
  { day: "Thu", value: 54 },
  { day: "Fri", value: 45 },
  { day: "Sat", value: 38 },
  { day: "Sun", value: 32 },
]

export default function Availability() {
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
                Availability
              </CardTitle>

              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Weekly schedule & slots. Add, edit, search, filter and export
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
                Add Availability
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
            placeholder="Search availability..."
            className="h-10 w-full rounded-xl border border-slate-200 bg-white pr-4 pl-10 text-sm transition outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <select
          defaultValue="all"
          className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 transition outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 sm:w-[160px]"
        >
          <option value="all">All status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="min-w-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-bold tracking-tight">6</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Total records
                </p>
              </div>

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Clock className="size-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="min-w-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-bold tracking-tight">5</p>

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
              <div>
                <p className="text-2xl font-bold tracking-tight">1</p>

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
              <div>
                <p className="text-2xl font-bold tracking-tight">Live</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Workspace status
                </p>
              </div>

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Clock className="size-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Availability Table */}
      <Card className="min-w-0 overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[850px]">
              {/* Table Header */}
              <div className="grid grid-cols-[1.1fr_1.1fr_1.7fr_1fr_1.1fr_1fr_1.2fr] items-center border-b bg-slate-50 px-4 py-3 text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                <div>Reference</div>
                <div>Day</div>
                <div>Slots</div>
                <div>Mode</div>
                <div>Daily Limit</div>
                <div>Status</div>
                <div>Actions</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-100">
                {availability.map((item) => (
                  <div
                    key={item.reference}
                    className="grid grid-cols-[1.1fr_1.1fr_1.7fr_1fr_1.1fr_1fr_1.2fr] items-center px-4 py-4 transition-colors hover:bg-slate-50"
                  >
                    <div className="text-sm font-medium text-slate-600">
                      {item.reference}
                    </div>

                    <div className="text-sm font-medium text-slate-800">
                      {item.day}
                    </div>

                    <div className="flex items-center gap-1.5 text-sm text-slate-500">
                      <Clock className="size-3.5" />
                      {item.slots}
                    </div>

                    <div className="text-sm text-slate-500">{item.mode}</div>

                    <div className="text-sm text-slate-600">
                      {item.dailyLimit}
                    </div>

                    <div>
                      <Badge
                        className={
                          item.status === "Active"
                            ? "border-0 bg-teal-100 text-teal-700 hover:bg-teal-100"
                            : "border-0 bg-slate-100 text-slate-600 hover:bg-slate-100"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        title="Edit availability"
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
                        title="Delete availability"
                        className="inline-flex size-7 items-center justify-center rounded-lg border border-red-100 bg-white text-red-500 transition hover:bg-red-50"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t bg-slate-50 px-4 py-2 text-center text-[11px] text-muted-foreground sm:hidden">
            Swipe horizontally to view all availability details.
          </div>
        </CardContent>
      </Card>

      {/* Activity Chart */}
      <Card className="min-w-0 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">
            Availability activity
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
                <linearGradient
                  id="availability-area"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#8b7cf6" stopOpacity="0.25" />

                  <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0.03" />
                </linearGradient>

                <linearGradient
                  id="availability-line"
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
              <path d={areaPath} fill="url(#availability-area)" />

              {/* Line */}
              <path
                d={linePath}
                fill="none"
                stroke="url(#availability-line)"
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
