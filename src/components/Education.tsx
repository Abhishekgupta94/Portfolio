import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'GL Bajaj Institute of Technology and Management',
    location: 'Greater Noida',
    period: '2022 – 2026',
    score: 'CGPA: 8.0',
    scoreLabel: 'Till 7th Semester',
    current: true,
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Class XII',
    institution: 'Saraswati Vidya Mandir',
    location: 'Basti',
    period: '2021',
    score: '88.8%',
    scoreLabel: 'Percentage',
    current: false,
  },
  {
    degree: 'Secondary Education',
    field: 'Class X',
    institution: 'Saraswati Vidya Mandir',
    location: 'Basti',
    period: '2019',
    score: '91%',
    scoreLabel: 'Percentage',
    current: false,
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} className="section-fade py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">Academic</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-slate-700 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <div key={i} className={`relative flex flex-col sm:flex-row gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full border-2 border-sky-400 bg-slate-950 hidden sm:block z-10">
                  {edu.current && <div className="absolute inset-0.5 rounded-full bg-sky-400 animate-ping opacity-75" />}
                  {edu.current && <div className="absolute inset-0.5 rounded-full bg-sky-400" />}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Card */}
                <div className={`card-hover w-full lg:w-1/2 bg-slate-900 border border-slate-800 hover:border-sky-500/40 rounded-2xl p-6 sm:ml-12 lg:ml-0 ${i % 2 === 0 ? 'lg:pl-10' : 'lg:pr-10'}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={20} className="text-sky-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">{edu.degree}</h3>
                          <p className="text-sky-400 text-sm font-medium mt-0.5">{edu.field}</p>
                        </div>
                        {edu.current && (
                          <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-slate-400 text-sm mt-2">{edu.institution}, {edu.location}</p>

                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-slate-500" />
                          <span className="text-slate-500 text-xs">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Award size={13} className="text-sky-400" />
                          <span className="text-sky-400 text-xs font-semibold">{edu.score}</span>
                          <span className="text-slate-600 text-xs">({edu.scoreLabel})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
