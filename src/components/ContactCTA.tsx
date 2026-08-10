'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitType: 'Retail Space',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Banner */}
      <div className="relative rounded-3xl glass-panel p-8 md:p-16 border border-gold-500/30 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left CTA Text (Bangla + English accent as requested) */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              08 — Investment Opportunity
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
              আপনার পরবর্তী ঠিকানা— <br />
              <span className="text-gold-gradient">আজই নিশ্চিত করুন।</span>
            </h2>

            <p className="mt-6 text-neutral-300 font-light text-base md:text-lg leading-relaxed">
              Book your premium commercial space or corporate headquarters at Muktar Plaza today. Experience unmatched returns and legacy architectural value.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-neutral-300 text-sm">
                <Phone className="w-5 h-5 text-gold-400" />
                <span>+880 1711 000 000 / +880 1800 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300 text-sm">
                <Mail className="w-5 h-5 text-gold-400" />
                <span>sales@muktarplaza.com</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300 text-sm">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span>Muktar Plaza Avenue, Commercial District</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4 text-xs text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
              <span>Government & RAJUK Approved Commercial Landmark</span>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl glass-panel-light border border-white/10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 mx-auto flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Booking Request Received</h3>
                  <p className="text-sm text-neutral-300 mt-2 font-light">
                    Our sales director will contact you within 2 hours with floor blueprints and price schedules.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-gold-400 underline uppercase tracking-wider"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-white mb-4">Request Price & Floorplan</h3>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian/80 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 17..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian/80 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Interested Unit</label>
                      <select
                        value={formData.unitType}
                        onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian/80 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="Retail Space">Retail Showroom</option>
                        <option value="Corporate Office">Corporate Office Floor</option>
                        <option value="Penthouse Suite">Penthouse Suite</option>
                        <option value="Full Floor Buying">Full Floor Acquisition</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="tanvir@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian/80 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-obsidian font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Confirm Booking Consultation</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
