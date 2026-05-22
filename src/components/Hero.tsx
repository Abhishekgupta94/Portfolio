import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('visible');
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sky-400 text-sm font-medium">Open to Opportunities</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Abhishek</span>
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent animate-gradient">
                Gupta
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-400 font-medium mb-4">
              Computer Science & Data Science Student
            </p>

            <p className="text-slate-500 text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
              Motivated B.Tech student specializing in Data Science with strong foundations in
              data structures, algorithms, and software development. Building innovative solutions
              with C, Java, Python, and JavaScript.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="/Resume_7th_Sem.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-slate-700 hover:border-sky-500 text-slate-300 hover:text-sky-400 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-5 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/abhishek-gupta-3a3836259/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-500/20 hover:border-sky-500 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:maddhesiyaabhishek@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-500/20 hover:border-sky-500 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:9415301568"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-500/20 hover:border-sky-500 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all duration-200"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-500/20 hover:border-sky-500 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all duration-200"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
              {/* Glow rings */}
              <div className="absolute inset-[-20px] rounded-full border border-sky-500/20 animate-spin" style={{ animationDuration: '10s' }} />
              <div className="absolute inset-[-40px] rounded-full border border-cyan-400/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

              {/* Photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sky-500/40 shadow-2xl shadow-sky-500/20 animate-pulse-glow">
                <img
                  src="/WhatsApp_Image_2026-05-04_at_2.55.28_PM.jpeg"
                  alt="Abhishek Gupta"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-sky-900/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 rounded-2xl px-4 py-2 shadow-xl">
                <p className="text-xs text-slate-400">CGPA</p>
                <p className="text-xl font-bold text-sky-400">8.0</p>
              </div>

              {/* Top badge */}
              <div className="absolute -top-4 -left-4 bg-slate-800 border border-slate-700 rounded-2xl px-3 py-2 shadow-xl">
                <p className="text-xs text-slate-400">B.Tech</p>
                <p className="text-sm font-bold text-emerald-400">CSE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-slate-600 text-xs">Scroll down</span>
          <ChevronDown size={20} className="text-slate-600" />
        </div>
      </div>
    </section>
  );
}
