import {
  Activity,
  Bell,
  CheckCircle2,
  Edit,
  MoreHorizontal,
  Search,
  Settings as SettingsIcon,
  Trash2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const settingsRecords = [
  {
    reference: "#SET-1001",
    setting: "Email Notifications",
    value: "Enabled",
    notes: "Receive appointment and account updates",
    updated: "14 Sep 2026",
    status: "Active",
  },
  {
    reference: "#SET-1002",
    setting: "Appointment Reminders",
    value: "24 hours before",
    notes: "Reminder sent to patients automatically",
    updated: "13 Sep 2026",
    status: "Active",
  },
  {
    reference: "#SET-1003",
    setting: "Video Consultation",
    value: "Enabled",
    notes: "Allow patients to book online consultations",
    updated: "12 Sep 2026",
    status: "Active",
  },
]

const activityData = [
  { day: "Mon", value: 82 },
  { day: "Tue", value: 76 },
  { day: "Wed", value: 70 },
  { day: "Thu", value: 63 },
  { day: "Fri", value: 57 },
  { day: "Sat", value: 51 },
  { day: "Sun", value: 45 },
]

export default function Settings() {
  const chartWidth = 800
  const chartHeight = 150
  const paddingX = 20
  const paddingTop = 15
  const paddingBottom = 30

  const chartInnerWidth = chartWidth - paddingX * 2
  const chartInnerHeight = chartHeight - paddingTop - paddingBottom

  const points = activityData.map((item, index) => {
    const x = paddingX + (index / (activityData.length - 1)) * chartInnerWidth

    const y =
      paddingTop + chartInnerHeight - (item.value / 100) * chartInnerHeight

    return { x, y }
  })

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ")

  const areaPath = `
    ${linePath}
    L ${points[points.length - 1].x} ${paddingTop + chartInnerHeight}
    L ${points[0].x} ${paddingTop + chartInnerHeight}
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
                Settings
              </CardTitle>

              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Account & notifications. Add, edit, search, filter and export
                records from here.
              </p>
            </div>

            {/* Actions */}
            <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <span className="text-sm">⇩</span>
                Export
              </button>

              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-violet-500 px-4 text-sm font-semibold text-slate-950 shadow-md transition hover:opacity-90"
              >
                <span className="text-base">+</span>
                Add Setting
              </button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Search + Filter */}
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
        <div className="relative min-w-0 flex-1">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search settings..."
            className="h-10 w-full rounded-xl border border-slate-200 bg-white pr-4 pl-10 text-sm transition outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <select
          defaultValue="all"
          className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 sm:w-[160px]"
        >
          <option value="all">All status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Records */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-bold">3</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Total records
                </p>
              </div>

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <SettingsIcon className="size-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-bold">3</p>

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

        {/* Attention */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-bold">0</p>

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

        {/* Workspace */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-bold">Live</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Workspace status
                </p>
              </div>

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Bell className="size-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Table */}
      <Card className="min-w-0 overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[950px]">
              {/* Header */}
              <div className="grid grid-cols-[1fr_1.2fr_1.2fr_1.8fr_1.2fr_1fr_1.2fr] items-center border-b bg-slate-50 px-4 py-3 text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                <div>Reference</div>
                <div>Setting</div>
                <div>Value</div>
                <div>Notes</div>
                <div>Updated</div>
                <div>Status</div>
                <div>Actions</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-100">
                {settingsRecords.map((record) => (
                  <div
                    key={record.reference}
                    className="grid grid-cols-[1fr_1.2fr_1.2fr_1.8fr_1.2fr_1fr_1.2fr] items-center px-4 py-4 transition hover:bg-slate-50"
                  >
                    <div className="text-sm font-medium text-slate-600">
                      {record.reference}
                    </div>

                    <div className="text-sm font-semibold text-slate-800">
                      {record.setting}
                    </div>

                    <div className="text-sm text-slate-700">{record.value}</div>

                    <div className="truncate text-sm text-slate-500">
                      {record.notes}
                    </div>

                    <div className="text-sm text-slate-600">
                      {record.updated}
                    </div>

                    <div>
                      <Badge className="border-0 bg-teal-100 text-teal-700 hover:bg-teal-100">
                        {record.status}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        title="Edit"
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
                        title="Delete"
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

          {/* Mobile hint */}
          <div className="border-t bg-slate-50 px-4 py-2 text-center text-[11px] text-muted-foreground sm:hidden">
            Swipe horizontally to view all settings.
          </div>
        </CardContent>
      </Card>

      {/* Chart */}
      <Card className="min-w-0 overflow-hidden">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold">
            Settings activity
          </CardTitle>

          <p className="text-xs text-muted-foreground">
            Live visual summary from saved records
          </p>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="w-full overflow-hidden">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-[150px] w-full sm:h-[175px]"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="settings-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b7cf6" stopOpacity="0.25" />

                  <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0.03" />
                </linearGradient>

                <linearGradient id="settings-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22c55e" />

                  <stop offset="100%" stopColor="#2dd4bf" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
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
              <path d={areaPath} fill="url(#settings-area)" />

              {/* Line */}
              <path
                d={linePath}
                fill="none"
                stroke="url(#settings-line)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Points */}
              {points.map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="3"
                  fill="#4fd1c5"
                />
              ))}

              {/* Day labels */}
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
