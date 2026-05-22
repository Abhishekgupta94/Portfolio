import { useEffect, useRef } from 'react';
import { BadgeCheck, Calendar, ChevronRight } from 'lucide-react';

const certifications = [
  {
    title: 'CCNA: Data Analytics Essential',
    issuer: 'Cisco Networking Academy',
    date: 'February 2025',
    points: [
      'Hands-on experience in data wrangling, visualization, and exploratory data analysis using Python',
      'Understood the analytics lifecycle: data collection → preprocessing → analysis → reporting',
    ],
    badge: 'Cisco',
    color: 'sky',
  },
  {
    title: 'NetAcad: Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'May 2025',
    points: [
      'Covered programming basics and syntax from Cisco Networking Academy',
      'Core Python concepts: variables, loops, conditionals, functions, and lists',
      'Practiced writing clean and readable code following Python best practices',
    ],
    badge: 'Python',
    color: 'emerald',
  },
];

export default function Certifications() {
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
    <section id="certifications" ref={ref} className="section-fade py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">Achievements</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className={`card-hover group bg-slate-900 border border-slate-800 hover:border-${cert.color}-500/40 rounded-2xl p-8 relative overflow-hidden`}>
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${cert.color}-500/5 rounded-full -translate-y-16 translate-x-16`} />

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-${cert.color}-500/10 border border-${cert.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                    <BadgeCheck size={26} className={`text-${cert.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{cert.title}</h3>
                    <p className={`text-${cert.color}-400 text-sm font-medium mt-1`}>{cert.issuer}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Calendar size={12} className="text-slate-500" />
                      <span className="text-slate-500 text-xs">{cert.date}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {cert.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ChevronRight size={15} className={`text-${cert.color}-400 mt-0.5 flex-shrink-0`} />
                      <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <span className={`inline-flex items-center gap-1.5 bg-${cert.color}-500/10 border border-${cert.color}-500/20 text-${cert.color}-400 text-xs px-3 py-1.5 rounded-full font-medium`}>
                    <BadgeCheck size={12} />
                    Verified Certificate
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
