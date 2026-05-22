import { useEffect, useRef, useState } from 'react';
import { Code, Database, Wrench, Users } from 'lucide-react';

const techSkills = [
  { name: 'Python', level: 80 },
  { name: 'Java', level: 75 },
  { name: 'C', level: 78 },
  { name: 'JavaScript', level: 65 },
  { name: 'Data Structures & Algorithms', level: 82 },
  { name: 'Problem Solving', level: 85 },
];

const tools = ['Git', 'GitHub', 'MS Word', 'MS Excel'];
const softSkills = ['Communication', 'Teamwork', 'Self-learning', 'Adaptability'];
const ds = ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Sorting', 'Greedy Algorithms'];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('visible');
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="section-fade py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">My Skills</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">Technical Arsenal</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                <Code size={18} className="text-sky-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Programming Skills</h3>
            </div>
            <div className="space-y-5">
              {techSkills.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 text-sm font-medium">{name}</span>
                    <span className="text-sky-400 text-sm font-semibold">{level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 skill-bar"
                      style={{ width: animated ? `${level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* DS&A tags */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <Database size={18} className="text-sky-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Data Structures</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {ds.map((item) => (
                  <span key={item} className="bg-slate-800 border border-slate-700 hover:border-sky-500/50 text-slate-300 text-sm px-3 py-1.5 rounded-lg transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <Wrench size={18} className="text-sky-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((item) => (
                  <span key={item} className="bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm px-3 py-1.5 rounded-lg font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <Users size={18} className="text-sky-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-slate-800/60 rounded-lg px-3 py-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
