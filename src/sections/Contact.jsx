import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, TerminalSquare } from 'lucide-react';
import SectionShell from '../components/SectionShell.jsx';
import { contactChannels } from '../data/portfolio.js';
import { fadeUp } from '../animations/motion.js';

export default function Contact() {
  const [status, setStatus] = useState('Awaiting transmission packet.');

  const submit = (event) => {
    event.preventDefault();
    setStatus('Message packet staged. Connect this form to EmailJS, Formspree, or a backend endpoint.');
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact Command Center"
      title="Open channel for projects, learning, and opportunities."
      subtitle="A command-center contact interface with Hemanth's resume contact details, social channels, and a form ready to connect to a production endpoint."
    >
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div className="panel-surface" variants={fadeUp}>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-matrix">Availability</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">Open to projects and internships</h3>
            </div>
            <span className="h-3 w-3 animate-pulse rounded-full bg-matrix shadow-green" />
          </div>
          <div className="space-y-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a key={channel.label} href={channel.href} className="contact-channel">
                  <Icon size={18} />
                  <span>
                    <strong>{channel.label}</strong>
                    <small>{channel.value}</small>
                  </span>
                </a>
              );
            })}
          </div>
          <div className="mt-6 rounded border border-cyanCore/20 bg-black/45 p-4">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-cyanCore">
              <TerminalSquare size={15} />
              terminal
            </div>
            <p className="font-mono text-sm leading-7 text-slate-300">{status}</p>
          </div>
        </motion.div>

        <motion.form className="contact-form" onSubmit={submit} variants={fadeUp}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span>Name</span>
              <input required placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input required type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input required placeholder="Internship, project, collaboration, or learning opportunity" />
          </label>
          <label>
            <span>Message</span>
            <textarea required rows="7" placeholder="Transmit your message..." />
          </label>
          <button type="submit" className="cta-button primary w-fit">
            <Send size={17} />
            Send Message
          </button>
        </motion.form>
      </div>
    </SectionShell>
  );
}
