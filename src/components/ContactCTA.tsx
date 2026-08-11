'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  AlertCircle,
} from 'lucide-react'

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '3dd95cab-39ca-411f-ba2e-dc4bd9588398'

const PHONE_NUMBERS = [
  { display: '01939-294938', raw: '01939294938' },
  { display: '01958-140773', raw: '01958140773' },
  { display: '01958-140774', raw: '01958140774' },
  { display: '01958-140775', raw: '01958140775' },
]

const UNIT_OPTIONS = [
  'Retail Showroom',
  'Corporate Office Floor',
  'Penthouse Suite',
  'Full Floor Acquisition',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactCTA() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitType: 'Retail Showroom',
    message: '',
    botcheck: '', // honeypot — bots fill this, humans never see it
  })

  const resetFields = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      unitType: 'Retail Showroom',
      message: '',
      botcheck: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Silently drop bot submissions
    if (formData.botcheck) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Inquiry — ${formData.name} (${formData.unitType})`,
          from_name: 'Muktar Plaza Website',
          replyto: formData.email,
          'Full Name': formData.name,
          'Phone Number': formData.phone,
          'Email Address': formData.email,
          'Interested Unit': formData.unitType,
          Message: formData.message || 'No additional message provided.',
          'Submitted From': 'Muktar Plaza — Contact Section',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        resetFields()
      } else {
        setStatus('error')
        setErrorMsg(
          result.message || 'Submission failed. Please try again or call us directly.',
        )
      }
    } catch (error) {
      console.error('Web3Forms error:', error)
      setStatus('error')
      setErrorMsg(
        'Network error. Please check your connection or call us directly at 01939-294938.',
      )
    }
  }

  const isLoading = status === 'loading'

  const inputClass =
    'w-full rounded-2xl border border-white/10 bg-obsidian/80 px-5 py-4 text-white placeholder:text-neutral-500 transition-all focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400/40 disabled:cursor-not-allowed disabled:opacity-50'

  const labelClass =
    'mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-400'

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-12">
      <div className="glass-panel relative overflow-hidden rounded-3xl border border-gold-500/30 p-8 md:p-16">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* ---------- LEFT: Information ---------- */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="block text-xs font-semibold uppercase tracking-[0.3em] text-gold-400"
            >
              08 — Investment Opportunity
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-4 font-serif text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Your Next Address Awaits — <br />
              <span className="text-gold-gradient">Book Today.</span>
            </motion.h2>

            <p className="mt-6 text-base leading-relaxed text-neutral-300 md:text-lg">
              Secure your premium commercial space or corporate headquarters at Muktar
              Plaza. Enjoy exceptional returns and timeless architectural excellence.
            </p>

            <div className="mt-10 space-y-6">
              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/10">
                  <Phone className="h-5 w-5 text-gold-400" />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2">
                  {PHONE_NUMBERS.map((item) => (
                    <a
                      key={item.raw}
                      href={`tel:${item.raw}`}
                      className="text-sm text-neutral-300 transition-colors hover:text-gold-400"
                    >
                      {item.display}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/10">
                  <Mail className="h-5 w-5 text-gold-400" />
                </div>
                <a
                  href="mailto:mukterplaza@gmail.com"
                  className="text-sm text-neutral-300 transition-colors hover:text-gold-400"
                >
                  mukterplaza@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/10">
                  <MapPin className="h-5 w-5 text-gold-400" />
                </div>
                <span className="text-sm text-neutral-300">
                  Rayerbag Bus Stand, Jatrabari, Dhaka
                </span>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-8 text-sm text-neutral-400">
              <ShieldCheck className="h-5 w-5 shrink-0 text-gold-400" />
              <span>Government &amp; RAJUK Approved Commercial Landmark</span>
            </div>
          </div>

          {/* ---------- RIGHT: Form ---------- */}
          <div className="lg:col-span-6">
            <div className="glass-panel-light rounded-2xl border border-white/10 p-8 md:p-10">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/20 text-gold-400">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-white">Thank You!</h3>
                  <p className="mt-4 text-lg text-neutral-300">
                    Your inquiry has been successfully received.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    Our sales team will contact you shortly with floor plans, pricing, and
                    next steps.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full border border-gold-500/30 px-8 py-3 text-xs uppercase tracking-wider text-gold-400 transition-all hover:bg-gold-500/10"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Request Price &amp; Floor Plan
                    </h3>
                    <p className="mt-2 text-sm text-neutral-400">
                      Complete the brief form below. Details will be securely transmitted
                      to our sales office.
                    </p>
                  </div>

                  {/* Honeypot — hidden from users */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    checked={Boolean(formData.botcheck)}
                    onChange={(e) =>
                      setFormData({ ...formData, botcheck: e.target.checked ? '1' : '' })
                    }
                  />

                  <div>
                    <label className={labelClass}>Your Full Name</label>
                    <input
                      type="text"
                      required
                      disabled={isLoading}
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        required
                        disabled={isLoading}
                        placeholder="01939-294938"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Interested Unit</label>
                      <select
                        disabled={isLoading}
                        value={formData.unitType}
                        onChange={(e) =>
                          setFormData({ ...formData, unitType: e.target.value })
                        }
                        className={inputClass}
                      >
                        {UNIT_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      required
                      disabled={isLoading}
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Additional Message (Optional)</label>
                    <textarea
                      rows={4}
                      disabled={isLoading}
                      placeholder="Share any specific requirements or questions..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-300"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 py-4 text-xs font-bold uppercase tracking-[0.15em] text-obsidian shadow-lg shadow-gold-500/30 transition-all hover:scale-[1.02] hover:shadow-gold-500/50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Confirm Booking Consultation
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-[10px] text-neutral-500">
                    Your information will be sent securely to mukterplaza@gmail.com
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}