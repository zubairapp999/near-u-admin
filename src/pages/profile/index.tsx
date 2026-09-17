import { useRef, useState, type ChangeEvent, type ReactNode } from "react"
import {
  Camera,
  CheckCircle2,
  Clock3,
  FileText,
  Image as ImageIcon,
  Languages,
  MapPin,
  Save,
  UserRound,
  X,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string
  placeholder?: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 transition outline-none placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-[#34363a] dark:bg-[#202124] dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-[#45474c] dark:focus:border-emerald-500 dark:focus:ring-emerald-500/10"
      />
    </div>
  )
}

/* =========================================================
   TEXT AREA
========================================================= */

function TextAreaField({
  label,
  placeholder,
  rows = 4,
}: {
  label: string
  placeholder?: string
  rows?: number
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
      </label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 transition outline-none placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-[#34363a] dark:bg-[#202124] dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-[#45474c] dark:focus:border-emerald-500 dark:focus:ring-emerald-500/10"
      />
    </div>
  )
}

/* =========================================================
   SELECT
========================================================= */

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
      </label>

      <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 transition outline-none hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-[#34363a] dark:bg-[#202124] dark:text-slate-100 dark:hover:border-[#45474c] dark:focus:border-emerald-500 dark:focus:ring-emerald-500/10">
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

/* =========================================================
   TOGGLE
========================================================= */

function ToggleField({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#34363a] dark:bg-[#202124]">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          {label}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onChange}
        aria-pressed={checked}
        className={`relative h-6 w-11 shrink-0 rounded-full transition focus:ring-4 focus:ring-emerald-500/10 focus:outline-none ${
          checked ? "bg-emerald-500" : "bg-slate-300 dark:bg-[#45474c]"
        } `}
      >
        <span
          className={`absolute top-1 size-4 rounded-full bg-white shadow-sm transition ${checked ? "left-6" : "left-1"} `}
        />
      </button>
    </div>
  )
}

/* =========================================================
   IMAGE UPLOAD
========================================================= */

function ImageUpload({
  type,
  file,
  preview,
  onChange,
  onRemove,
}: {
  type: "profile" | "cover"
  file: File | null
  preview: string | null
  onChange: (file: File) => void
  onRemove: () => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  const isProfile = type === "profile"

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (!selectedFile) {
      return
    }

    if (!selectedFile.type.startsWith("image/")) {
      return
    }

    onChange(selectedFile)
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        {isProfile ? "Profile Photo" : "Cover / Banner Image"}
      </label>

      <div className="relative flex min-h-32 items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50 transition hover:border-slate-400 hover:bg-slate-100 dark:border-[#3a3c40] dark:bg-[#202124] dark:hover:border-[#4a4d52] dark:hover:bg-[#24262a]">
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleChange}
          className="hidden"
        />

        {/* =================================================
            PREVIEW
        ================================================= */}

        {preview ? (
          <div className="relative min-h-32 w-full">
            <img
              src={preview}
              alt={isProfile ? "Profile photo preview" : "Cover image preview"}
              className={
                isProfile
                  ? "mx-auto my-2 size-28 rounded-full border-2 border-white object-cover shadow-md dark:border-[#3a3c40]"
                  : "h-32 w-full object-cover"
              }
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition hover:opacity-100">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-slate-800 shadow transition hover:bg-slate-100"
                >
                  Change
                </button>

                <button
                  type="button"
                  onClick={onRemove}
                  className="rounded-lg bg-red-500 px-3.5 py-2 text-sm font-medium text-white shadow transition hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>

            {file && (
              <div className="absolute right-2 bottom-2 left-2 truncate rounded-lg bg-black/65 px-3 py-1.5 text-center text-xs text-white">
                {file.name}
              </div>
            )}
          </div>
        ) : (
          /* =================================================
             EMPTY STATE
          ================================================= */

          <div
            className={
              isProfile
                ? "flex items-center gap-4 px-4 py-4"
                : "flex flex-col items-center px-4 py-5 text-center"
            }
          >
            {isProfile ? (
              <>
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-[#3a3c40] dark:bg-[#292b2f]">
                  <Camera className="size-6 text-slate-400 dark:text-slate-400" />
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-[#3a3c40] dark:bg-[#292b2f] dark:text-slate-200 dark:hover:bg-[#303236]"
                  >
                    Upload Photo
                  </button>

                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    JPG, PNG or WEBP. Recommended 400×400px.
                  </p>
                </div>
              </>
            ) : (
              <>
                <ImageIcon className="size-8 text-slate-400 dark:text-slate-500" />

                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="mt-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-[#3a3c40] dark:bg-[#292b2f] dark:text-slate-200 dark:hover:bg-[#303236]"
                >
                  Upload Banner
                </button>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  JPG, PNG or WEBP. Recommended 1200×400px.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* =========================================================
   SECTION CARD
========================================================= */

function SectionCard({
  icon: Icon,
  title,
  description,
  iconClassName = "text-emerald-600 dark:text-emerald-400",
  children,
}: {
  icon: typeof UserRound
  title: string
  description: string
  iconClassName?: string
  children: ReactNode
}) {
  return (
    <Card className="overflow-hidden border-slate-200 bg-white shadow-sm dark:border-[#292b2f] dark:bg-[#171717]">
      <CardHeader className="border-b border-slate-100 pb-5 dark:border-[#292b2f]">
        <div className="flex items-start gap-3">
          <div
            className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 ${iconClassName} dark:bg-emerald-500/10`}
          >
            <Icon className="size-5" />
          </div>

          <div>
            <CardTitle className="text-base font-semibold text-slate-900 dark:text-white">
              {title}
            </CardTitle>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  )
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function AddDoctorProfile() {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null)

  const [profilePhotoPreview, setProfilePhotoPreview] = useState<string | null>(
    null
  )

  const [coverImage, setCoverImage] = useState<File | null>(null)

  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
    null
  )

  const [videoConsultation, setVideoConsultation] = useState(false)

  const [digitalPrescription, setDigitalPrescription] = useState(false)

  const [onlineBooking, setOnlineBooking] = useState(true)

  const [homeVisit, setHomeVisit] = useState(false)

  const [publicProfile, setPublicProfile] = useState(true)

  const [acceptNewPatients, setAcceptNewPatients] = useState(true)

  /* =======================================================
     PROFILE PHOTO
  ======================================================= */

  const handleProfilePhoto = (file: File) => {
    if (profilePhotoPreview) {
      URL.revokeObjectURL(profilePhotoPreview)
    }

    const previewUrl = URL.createObjectURL(file)

    setProfilePhoto(file)
    setProfilePhotoPreview(previewUrl)
  }

  const removeProfilePhoto = () => {
    if (profilePhotoPreview) {
      URL.revokeObjectURL(profilePhotoPreview)
    }

    setProfilePhoto(null)
    setProfilePhotoPreview(null)
  }

  /* =======================================================
     COVER IMAGE
  ======================================================= */

  const handleCoverImage = (file: File) => {
    if (coverImagePreview) {
      URL.revokeObjectURL(coverImagePreview)
    }

    const previewUrl = URL.createObjectURL(file)

    setCoverImage(file)
    setCoverImagePreview(previewUrl)
  }

  const removeCoverImage = () => {
    if (coverImagePreview) {
      URL.revokeObjectURL(coverImagePreview)
    }

    setCoverImage(null)
    setCoverImagePreview(null)
  }

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log("Profile Photo:", profilePhoto)
    console.log("Cover Image:", coverImage)

    /*
      Later, when backend is ready:

      const formData = new FormData()

      formData.append("doctorName", ...)
      formData.append("profilePhoto", profilePhoto)
      formData.append("coverImage", coverImage)

      await api.post("/doctors/profile", formData)
    */

    console.log("Doctor profile submitted")
  }

  return (
    <div className="min-h-full bg-slate-50/60 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm dark:border-[#292b2f] dark:bg-[#171717]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-emerald-600 uppercase dark:text-emerald-400">
                Doctor Profile
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Create Doctor Profile
              </h1>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Add your professional information, clinic details, consultation
                fees and availability.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-[#3a3c40] dark:bg-[#202124] dark:text-slate-200 dark:hover:bg-[#292b2f]"
              >
                <X className="size-4" />
                Cancel
              </button>

              <button
                type="submit"
                form="doctor-profile-form"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-violet-500 px-5 text-sm font-semibold text-white shadow-sm transition hover:from-emerald-600 hover:to-violet-600"
              >
                <Save className="size-4" />
                Save Profile
              </button>
            </div>
          </div>
        </div>

        <form
          id="doctor-profile-form"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* =================================================
              BASIC DETAILS
          ================================================= */}

          <SectionCard
            icon={UserRound}
            title="Basic Details"
            description="Your basic professional identity."
          >
            <div className="space-y-6">
              {/* Image Uploads */}

              <div className="grid gap-5 lg:grid-cols-2">
                <ImageUpload
                  type="profile"
                  file={profilePhoto}
                  preview={profilePhotoPreview}
                  onChange={handleProfilePhoto}
                  onRemove={removeProfilePhoto}
                />

                <ImageUpload
                  type="cover"
                  file={coverImage}
                  preview={coverImagePreview}
                  onChange={handleCoverImage}
                  onRemove={removeCoverImage}
                />
              </div>

              {/* Basic Fields */}

              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Doctor Name"
                  placeholder="Dr. Ankit Verma"
                  required
                />

                <Field
                  label="Professional Title"
                  placeholder="Senior Consultant Physician"
                />

                <Field label="Specialty" placeholder="Cardiologist" />

                <Field label="Qualifications" placeholder="MBBS, MD, DM" />

                <Field
                  label="Years of Experience"
                  placeholder="10"
                  type="number"
                />

                <Field label="Languages" placeholder="English, Hindi" />
              </div>
            </div>
          </SectionCard>

          {/* =================================================
              PROFESSIONAL DETAILS
          ================================================= */}

          <SectionCard
            icon={FileText}
            title="Professional Details"
            description="Describe your medical experience and expertise."
            iconClassName="text-violet-600 dark:text-violet-400"
          >
            <div className="space-y-5">
              <TextAreaField
                label="About Doctor"
                placeholder="Write a short introduction about yourself..."
                rows={5}
              />

              <div className="grid gap-5 md:grid-cols-2">
                <TextAreaField
                  label="Areas of Expertise"
                  placeholder="Cardiology, preventive cardiology, hypertension..."
                />

                <TextAreaField
                  label="Conditions Treated"
                  placeholder="Heart disease, hypertension, cholesterol..."
                />
              </div>

              <TextAreaField
                label="Services / Treatments"
                placeholder="Consultation, ECG, cardiac screening..."
              />
            </div>
          </SectionCard>

          {/* =================================================
              CLINIC DETAILS
          ================================================= */}

          <SectionCard
            icon={MapPin}
            title="Clinic Details"
            description="Add your clinic or hospital information."
            iconClassName="text-blue-600 dark:text-blue-400"
          >
            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Clinic / Hospital Name"
                  placeholder="City Care Hospital"
                />

                <Field
                  label="Phone Number"
                  placeholder="+91 98765 43210"
                  type="tel"
                />
              </div>

              <TextAreaField
                label="Address"
                placeholder="Full clinic address..."
                rows={3}
              />

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="City" placeholder="Delhi" />

                <Field label="Postal Code" placeholder="110001" />
              </div>
            </div>
          </SectionCard>

          {/* =================================================
              CONSULTATION
          ================================================= */}

          <SectionCard
            icon={Clock3}
            title="Consultation"
            description="Configure consultation fees and available consultation types."
            iconClassName="text-amber-600 dark:text-amber-400"
          >
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <Field label="Clinic Fee" placeholder="800" type="number" />

                <Field
                  label="Video Consultation Fee"
                  placeholder="600"
                  type="number"
                />

                <Field label="Duration" placeholder="30" type="number" />

                <Field label="Follow-up Fee" placeholder="400" type="number" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <ToggleField
                  label="Video Consultation"
                  description="Allow patients to book video consultations."
                  checked={videoConsultation}
                  onChange={() => setVideoConsultation(!videoConsultation)}
                />

                <ToggleField
                  label="Digital Prescription"
                  description="Allow digital prescriptions after consultation."
                  checked={digitalPrescription}
                  onChange={() => setDigitalPrescription(!digitalPrescription)}
                />
              </div>
            </div>
          </SectionCard>

          {/* =================================================
              AVAILABILITY
          ================================================= */}

          <SectionCard
            icon={Clock3}
            title="Availability"
            description="Configure your appointment schedule."
            iconClassName="text-teal-600 dark:text-teal-400"
          >
            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <SelectField
                  label="Working Days"
                  options={[
                    "Monday - Friday",
                    "Monday - Saturday",
                    "Every Day",
                  ]}
                />

                <Field
                  label="Working Hours"
                  placeholder="09:00 AM - 05:00 PM"
                />

                <SelectField
                  label="Appointment Slot Duration"
                  options={[
                    "15 minutes",
                    "30 minutes",
                    "45 minutes",
                    "60 minutes",
                  ]}
                />

                <Field
                  label="Available Slots"
                  placeholder="09:00, 09:30, 10:00..."
                />
              </div>

              <Field label="Next Available Slot" type="date" />
            </div>
          </SectionCard>

          {/* =================================================
              VERIFICATION
          ================================================= */}

          <SectionCard
            icon={CheckCircle2}
            title="Verification"
            description="Provide your medical registration information."
            iconClassName="text-emerald-600 dark:text-emerald-400"
          >
            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Medical Registration Number"
                  placeholder="Registration number"
                />

                <SelectField
                  label="Medical Council / Authority"
                  options={[
                    "National Medical Commission",
                    "Delhi Medical Council",
                    "Other",
                  ]}
                />
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />

                <div>
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                    Verification information
                  </p>

                  <p className="mt-1 text-xs leading-5 text-emerald-700 dark:text-emerald-400">
                    Your registration details will be reviewed by the platform
                    before your profile is verified.
                  </p>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* =================================================
              PROFILE SETTINGS
          ================================================= */}

          <SectionCard
            icon={Languages}
            title="Profile Settings"
            description="Configure how your profile appears to patients."
            iconClassName="text-indigo-600 dark:text-indigo-400"
          >
            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Profile Rating" placeholder="4.8" type="number" />

                <Field label="Total Reviews" placeholder="124" type="number" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <ToggleField
                  label="Online Booking"
                  description="Allow patients to book appointments online."
                  checked={onlineBooking}
                  onChange={() => setOnlineBooking(!onlineBooking)}
                />

                <ToggleField
                  label="Home Visit"
                  description="Allow patients to request home visits."
                  checked={homeVisit}
                  onChange={() => setHomeVisit(!homeVisit)}
                />

                <ToggleField
                  label="Public Profile"
                  description="Make your doctor profile visible to patients."
                  checked={publicProfile}
                  onChange={() => setPublicProfile(!publicProfile)}
                />

                <ToggleField
                  label="Accept New Patients"
                  description="Allow new patients to book appointments."
                  checked={acceptNewPatients}
                  onChange={() => setAcceptNewPatients(!acceptNewPatients)}
                />
              </div>
            </div>
          </SectionCard>

          {/* =================================================
              BOTTOM ACTIONS
          ================================================= */}

          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end dark:border-[#292b2f]">
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-[#3a3c40] dark:bg-[#202124] dark:text-slate-200 dark:hover:bg-[#292b2f]"
            >
              <X className="size-4" />
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-violet-500 px-6 text-sm font-semibold text-white shadow-sm transition hover:from-emerald-600 hover:to-violet-600 focus:ring-4 focus:ring-emerald-500/20 focus:outline-none"
            >
              <Save className="size-4" />
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
