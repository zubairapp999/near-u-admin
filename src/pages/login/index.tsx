import { type FormEvent, useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import { Building2, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Replace this demo session with the authentication request when the API is connected.
    window.setTimeout(() => {
      sessionStorage.setItem("demo-authenticated", "true")
      setIsSubmitting(false)
      navigate({ to: "/" })
    }, 700)
  }

  return (
    <main className="grid min-h-screen bg-slate-50 lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#10b981_0%,_transparent_34%),radial-gradient(circle_at_bottom_right,_#7c3aed_0%,_transparent_38%)] opacity-70" />

        <div className="relative flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <Building2 className="size-6" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Near U Partner</span>
        </div>

        <div className="relative max-w-md">
          <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300 uppercase">
            Partner portal
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-tight">
            Run your business, all in one place.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Manage orders, bookings, availability, customers, and your business profile securely.
          </p>
        </div>

        <p className="relative text-sm text-slate-400">© 2026 Near U</p>
      </section>

      <section className="flex items-center justify-center p-5 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950">
              <Building2 className="size-5" />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">Near U Partner</span>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
              Welcome back
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Sign in to your account
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your email and password to access your business dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pr-4 pl-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <a href="#forgot-password" className="text-sm font-medium text-emerald-600 transition hover:text-emerald-700">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pr-12 pl-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>

            <label className="flex w-fit cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" name="remember" className="size-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
              Remember me
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-violet-500 px-5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/15 transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Need help accessing your account? <a href="mailto:support@near-u.health" className="font-medium text-emerald-600 hover:text-emerald-700">Contact support</a>
          </p>
        </div>
      </section>
    </main>
  )
}
