import {
  Camera,
  CheckCircle2,
  Clock,
  FileText,
  Image as ImageIcon,
  Languages,
  MapPin,
  Save,
  Stethoscope,
  UserRound,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddDoctorProfile() {
  return (
    <div className="w-full min-w-0 space-y-6">
      {/* Page Header */}
      <Card className="overflow-hidden">
        <CardHeader className="p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-1 text-[10px] font-semibold tracking-widest text-emerald-600 uppercase">
                Doctor Profile
              </p>

              <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">
                Create Doctor Profile
              </CardTitle>

              <p className="mt-1 text-sm text-muted-foreground">
                Add your professional information, clinic details, consultation
                fees and availability.
              </p>
            </div>

            <div className="flex w-full gap-2 sm:w-auto">
              <button
                type="button"
                className="h-10 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex-none"
              >
                Cancel
              </button>

              <button
                type="submit"
                form="doctor-profile-form"
                className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-violet-500 px-4 text-sm font-semibold text-slate-950 shadow-md transition hover:opacity-90 sm:flex-none"
              >
                <Save className="size-4" />
                Save Profile
              </button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <form id="doctor-profile-form" className="space-y-6">
        {/* ========================================================= */}
        {/* BASIC DETAILS */}
        {/* ========================================================= */}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <UserRound className="size-5" />
              </div>

              <div>
                <CardTitle className="text-lg">Basic Details</CardTitle>

                <p className="text-sm text-muted-foreground">
                  Your basic professional identity.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Profile + Cover */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Profile Photo */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Profile Photo
                </label>

                <div className="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
                  <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
                    <Camera className="size-7" />
                  </div>

                  <div>
                    <button
                      type="button"
                      className="rounded-lg border bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
                    >
                      Upload Photo
                    </button>

                    <p className="mt-1 text-xs text-muted-foreground">
                      JPG, PNG or WEBP. Recommended 400×400px.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Cover / Banner Image
                </label>

                <div className="flex min-h-[112px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50">
                  <div className="text-center">
                    <ImageIcon className="mx-auto size-7 text-slate-400" />

                    <button
                      type="button"
                      className="mt-2 rounded-lg border bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
                    >
                      Upload Banner
                    </button>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Recommended 1200×400px.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Name / Title */}
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Doctor Name"
                placeholder="Dr. Ankit Verma"
                required
              />

              <Field
                label="Professional Title"
                placeholder="Senior Consultant Physician"
              />
            </div>

            {/* Specialty / Qualification */}
            <div className="grid gap-4 md:grid-cols-2">
              <SelectField
                label="Specialty"
                options={[
                  "General Physician",
                  "Cardiologist",
                  "Dermatologist",
                  "Orthopedic",
                  "Pediatrician",
                  "Gynecologist",
                  "Neurologist",
                  "Dentist",
                  "Other",
                ]}
              />

              <Field label="Qualifications" placeholder="MBBS, MD" />
            </div>

            {/* Experience / Languages */}
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Years of Experience"
                type="number"
                placeholder="12"
              />

              <Field
                label="Languages Spoken"
                placeholder="English, Hindi, Bengali"
              />
            </div>
          </CardContent>
        </Card>

        {/* ========================================================= */}
        {/* PROFESSIONAL DETAILS */}
        {/* ========================================================= */}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Stethoscope className="size-5" />
              </div>

              <div>
                <CardTitle className="text-lg">Professional Details</CardTitle>

                <p className="text-sm text-muted-foreground">
                  Tell patients about your expertise and services.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            <TextAreaField
              label="About Doctor"
              placeholder="Write a short professional introduction about yourself..."
              rows={5}
            />

            <TextAreaField
              label="Areas of Expertise"
              placeholder="e.g. Diabetes management, hypertension, preventive healthcare..."
              rows={4}
            />

            <TextAreaField
              label="Conditions Treated"
              placeholder="e.g. Diabetes, hypertension, thyroid disorders, fever..."
              rows={4}
            />

            <TextAreaField
              label="Services / Treatments Offered"
              placeholder="e.g. General consultation, health checkup, chronic disease management..."
              rows={4}
            />
          </CardContent>
        </Card>

        {/* ========================================================= */}
        {/* CLINIC DETAILS */}
        {/* ========================================================= */}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin className="size-5" />
              </div>

              <div>
                <CardTitle className="text-lg">Clinic Details</CardTitle>

                <p className="text-sm text-muted-foreground">
                  Add your clinic or hospital information.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            <Field
              label="Clinic / Hospital Name"
              placeholder="City Care Hospital"
            />

            <TextAreaField
              label="Clinic Address"
              placeholder="Enter complete clinic address..."
              rows={3}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="City" placeholder="New Delhi" />

              <Field
                label="Clinic Phone Number"
                placeholder="+91 98765 43210"
                type="tel"
              />
            </div>
          </CardContent>
        </Card>

        {/* ========================================================= */}
        {/* CONSULTATION */}
        {/* ========================================================= */}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <FileText className="size-5" />
              </div>

              <div>
                <CardTitle className="text-lg">Consultation</CardTitle>

                <p className="text-sm text-muted-foreground">
                  Configure consultation fees and services.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Field
                label="Clinic Consultation Fee"
                placeholder="₹500"
                type="text"
              />

              <Field
                label="Video Consultation Fee"
                placeholder="₹400"
                type="text"
              />

              <Field label="Consultation Duration" placeholder="30 minutes" />

              <Field label="Follow-up Fee" placeholder="₹300" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <ToggleField
                label="Video Consultation Available"
                description="Allow patients to book online video consultations."
                defaultChecked
              />

              <ToggleField
                label="Digital Prescription Available"
                description="Allow digital prescriptions after consultation."
                defaultChecked
              />
            </div>
          </CardContent>
        </Card>

        {/* ========================================================= */}
        {/* AVAILABILITY */}
        {/* ========================================================= */}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                <Clock className="size-5" />
              </div>

              <div>
                <CardTitle className="text-lg">Availability</CardTitle>

                <p className="text-sm text-muted-foreground">
                  Set your working schedule and appointment slots.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Working Days */}
            <div>
              <label className="mb-3 block text-sm font-medium">
                Working Days
              </label>

              <div className="flex flex-wrap gap-2">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <label key={day} className="cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={day !== "Sunday"}
                      className="peer sr-only"
                    />

                    <span className="block rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition peer-checked:border-emerald-300 peer-checked:bg-emerald-50 peer-checked:text-emerald-700">
                      {day}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Working Hours - Start"
                type="time"
                defaultValue="09:00"
              />

              <Field
                label="Working Hours - End"
                type="time"
                defaultValue="18:00"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <SelectField
                label="Appointment Slot Duration"
                options={[
                  "15 minutes",
                  "20 minutes",
                  "30 minutes",
                  "45 minutes",
                  "60 minutes",
                ]}
              />

              <Field
                label="Available Slots"
                placeholder="09:00 AM, 09:30 AM..."
              />

              <Field label="Next Available Slot" type="datetime-local" />
            </div>
          </CardContent>
        </Card>

        {/* ========================================================= */}
        {/* VERIFICATION */}
        {/* ========================================================= */}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <CheckCircle2 className="size-5" />
              </div>

              <div>
                <CardTitle className="text-lg">Verification</CardTitle>

                <p className="text-sm text-muted-foreground">
                  Provide your medical registration details.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Medical Registration Number"
                placeholder="REG-123456"
                required
              />

              <Field
                label="Medical Council / Registration Authority"
                placeholder="Delhi Medical Council"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Verification Status
              </label>

              <select className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100">
                <option value="pending">Pending Verification</option>

                <option value="verified">Verified</option>

                <option value="rejected">Rejected</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* ========================================================= */}
        {/* PROFILE / PLATFORM */}
        {/* ========================================================= */}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Languages className="size-5" />
              </div>

              <div>
                <CardTitle className="text-lg">Profile / Platform</CardTitle>

                <p className="text-sm text-muted-foreground">
                  Configure your public profile and booking options.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Rating"
                placeholder="4.8"
                type="number"
                step="0.1"
              />

              <Field label="Total Reviews" placeholder="128" type="number" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <ToggleField
                label="Online Booking Available"
                description="Allow patients to book appointments through your profile."
                defaultChecked
              />

              <ToggleField
                label="Home Visit Available"
                description="Allow patients to request home visits."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Profile Status
              </label>

              <select className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100">
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Actions */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="h-11 rounded-xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-violet-500 px-6 text-sm font-semibold text-slate-950 shadow-md transition hover:opacity-90"
          >
            <Save className="size-4" />
            Save Doctor Profile
          </button>
        </div>
      </form>
    </div>
  )
}

/* ========================================================= */
/* REUSABLE LOCAL FORM COMPONENTS */
/* ========================================================= */

type FieldProps = {
  label: string
  placeholder?: string
  type?: string
  required?: boolean
  defaultValue?: string
  step?: string
}

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
  defaultValue,
  step,
}: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        step={step}
        required={required}
        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 transition outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
      />
    </div>
  )
}

type TextAreaFieldProps = {
  label: string
  placeholder?: string
  rows?: number
}

function TextAreaField({ label, placeholder, rows = 4 }: TextAreaFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 transition outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
      />
    </div>
  )
}

type SelectFieldProps = {
  label: string
  options: string[]
}

function SelectField({ label, options }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <select className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 transition outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100">
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

type ToggleFieldProps = {
  label: string
  description: string
  defaultChecked?: boolean
}

function ToggleField({
  label,
  description,
  defaultChecked = false,
}: ToggleFieldProps) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-slate-50">
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-800">{label}</p>

        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="relative shrink-0">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="peer sr-only"
        />

        <div className="h-6 w-11 rounded-full bg-slate-200 transition peer-checked:bg-emerald-500" />

        <div className="absolute top-1 left-1 size-4 rounded-full bg-white shadow-sm transition peer-checked:translate-x-5" />
      </div>
    </label>
  )
}
