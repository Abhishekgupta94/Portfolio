import { useEffect, useRef } from 'react';
import { User, MapPin, GraduationCap, Target } from 'lucide-react';

export default function About() {
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
    <section id="about" ref={ref} className="section-fade py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">Who I Am</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-400 text-lg leading-relaxed">
              I'm a motivated and results-oriented computer science student specializing in
              <span className="text-sky-400 font-medium"> Data Science</span> at GL Bajaj Institute of
              Technology and Management, Greater Noida. With a strong foundation in data structures
              and algorithms, I'm passionate about building innovative software solutions.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Currently in my final year of B.Tech (2022–2026) with a CGPA of
              <span className="text-emerald-400 font-semibold"> 8.0</span>, I'm actively seeking
              Software Engineering internship opportunities to apply my skills in real-world environments
              and contribute to dynamic development teams.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: MapPin, label: 'Location', value: 'Greater Noida, UP' },
                { icon: GraduationCap, label: 'Degree', value: 'B.Tech CSE' },
                { icon: Target, label: 'Focus', value: 'Data Science' },
                { icon: User, label: 'Status', value: 'Open to Work' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <Icon size={16} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '8.0', label: 'CGPA', sub: 'Till 7th Semester' },
              { number: '2+', label: 'Projects', sub: 'Completed' },
              { number: '2', label: 'Certifications', sub: 'Cisco & More' },
              { number: '4+', label: 'Languages', sub: 'C, Java, Python, JS' },
            ].map(({ number, label, sub }) => (
              <div key={label} className="card-hover bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-1">{number}</p>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-slate-500 text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
