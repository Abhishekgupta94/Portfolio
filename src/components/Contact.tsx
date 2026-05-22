import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Send, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="section-fade py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">Contact Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            I'm actively seeking internship opportunities. Whether you have a project in mind or
            just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white font-bold text-xl mb-8">Let's Connect</h3>

            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'maddhesiyaabhishek@gmail.com',
                href: 'mailto:maddhesiyaabhishek@gmail.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+91 9415301568',
                href: 'tel:9415301568',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Greater Noida, Uttar Pradesh',
                href: null,
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
                value: 'abhishek-gupta-3a3836259',
                href: 'https://www.linkedin.com/in/abhishek-gupta-3a3836259/',
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors">
                  <Icon size={18} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-sky-400 transition-colors flex items-center gap-1"
                    >
                      {value}
                      {href.startsWith('http') && <ExternalLink size={12} />}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-slate-900 border border-slate-700 focus:border-sky-500 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-slate-900 border border-slate-700 focus:border-sky-500 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-sm mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Abhishek, I'd like to talk about..."
                  className="w-full bg-slate-900 border border-slate-700 focus:border-sky-500 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {sent && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm px-4 py-3 rounded-xl">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          &copy; 2026 Abhishek Gupta. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs">
          Built with React + TypeScript + Tailwind CSS
        </p>
      </div>
    </section>
  );
}
