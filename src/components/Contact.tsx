import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Phone, 
  ExternalLink,
  Clock,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserProfile } from '../types';
import { Trans } from '@lingui/react/macro';
import { t } from '@lingui/core/macro';

interface ContactProps {
  profile: UserProfile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable sending action
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/60">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <Trans id="contact.badge" comment="Badge label for contact section, inviting collaboration">
              Let's Build Together
            </Trans>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <Trans id="contact.title" comment="Main title for contact section">
              Get In Touch
            </Trans>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            <Trans id="contact.subtitle" comment="Subtitle describing how to reach out for projects and roles">
              Have a project in mind, an engineering role, or want to discuss system architectures?
            </Trans>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Communication Channels & Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Overview Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <Trans id="contact.directChannels.title" comment="Title for direct contact channels section">
                  Direct Contact Channels
                </Trans>
              </h3>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono text-slate-400">
                      <Trans id="contact.directChannels.email.label" comment="Label for direct email channel">
                        Direct Email
                      </Trans>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                      {profile.email}
                    </p>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  title={t({
                    id: "contact.directChannels.email.copyButton",
                    comment: "Tooltip for copy email button"
                  })`Copy email`}
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors flex-shrink-0 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp / Phone */}
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">
                      <Trans id="contact.directChannels.whatsapp.label" comment="Label for WhatsApp/direct call channel">
                        WhatsApp / Direct Call
                      </Trans>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                      {profile.phone}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400">
                    <Trans id="contact.directChannels.location.label" comment="Label for location and timezone information">
                      Location & Timezone
                    </Trans>
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">
                    <Trans 
                      id="contact.directChannels.location.value" 
                      comment="Location and timezone info, UTC-3 is Brazil timezone"
                    >
                      {profile.location} (UTC-3 / Remote Worldwide)
                    </Trans>
                  </p>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <Trans 
                  id="contact.directChannels.responseTime" 
                  comment="Typical response time badge text"
                >
                  Typical response time: <strong>under 24 hours</strong>.
                </Trans>
              </div>
            </div>

            {/* Schedule Meeting Callout Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm font-mono">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <Trans id="contact.scheduleMeeting.badge" comment="Badge for quick meeting invitation">
                  Quick 15-Min Intro
                </Trans>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                <Trans id="contact.scheduleMeeting.description" comment="Description inviting to schedule a quick call">
                  Prefer a fast voice or video discussion? Reach out to lock in a slot.
                </Trans>
              </p>
              <a
                href={`mailto:${profile.email}?subject=Introductory 15-Minute Sync`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 rounded-xl shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <Trans id="contact.scheduleMeeting.button" comment="Button text to request a call">
                  Request a Call
                </Trans>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/20 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white">
                      <Trans id="contact.form.success.title" comment="Success title after message submission">
                        Message Dispatched!
                      </Trans>
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      <Trans id="contact.form.success.message" comment="Thank you message after form submission">
                        Thank you for getting in touch. I will review your message and reply promptly.
                      </Trans>
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
                  >
                    <Trans id="contact.form.success.resetButton" comment="Button to send another message">
                      Send Another Note
                    </Trans>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-white mb-2">
                    <Trans id="contact.form.title" comment="Title for contact form">
                      Send a Message
                    </Trans>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        <Trans id="contact.form.name.label" comment="Label for name input field">
                          Your Name
                        </Trans>
                        <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t({
                          id: "contact.form.name.placeholder",
                          comment: "Placeholder for name input field"
                        })`John Doe`}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        <Trans id="contact.form.email.label" comment="Label for email input field">
                          Email Address
                        </Trans>
                        <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t({
                          id: "contact.form.email.placeholder",
                          comment: "Placeholder for email input field"
                        })`john@example.com`}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      <Trans id="contact.form.subject.label" comment="Label for subject input field">
                        Subject
                      </Trans>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t({
                        id: "contact.form.subject.placeholder",
                        comment: "Placeholder for subject input field"
                      })`Project Inquiry / Engineering Role`}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      <Trans id="contact.form.message.label" comment="Label for message textarea">
                        Message
                      </Trans>
                      <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t({
                        id: "contact.form.message.placeholder",
                        comment: "Placeholder for message textarea"
                      })`Hi Lucas, let's talk about our new cloud architecture...`}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <Trans id="contact.form.submitting" comment="Loading text when sending message">
                          Sending message...
                        </Trans>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <Trans id="contact.form.submit" comment="Submit button text for contact form">
                          Send Message
                        </Trans>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};