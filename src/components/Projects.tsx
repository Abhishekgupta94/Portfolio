import { useEffect, useRef } from 'react';
import { ExternalLink, Calendar, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Electricity Bill Splitter',
    date: 'November 2023',
    description: 'Automated C++ program for splitting electricity bills among tenants with fair and accurate cost distribution.',
    highlights: [
      'Leveraged OOP, data structures, and algorithms to optimize efficiency by 60%',
      'Reduced manual errors by 40% through structured data handling',
      'Logic-based calculations for accurate cost distribution',
    ],
    tags: ['C++', 'OOP', 'Data Structures', 'Algorithms'],
    color: 'from-sky-500 to-cyan-400',
    icon: '⚡',
  },
  {
    title: 'Fake Review Detection & Deletion',
    date: 'December 2024',
    description: 'Machine learning system to identify and remove fake reviews from online platforms using advanced classification techniques.',
    highlights: [
      'Trained Logistic Regression and Naive Bayes models for binary classification',
      'Engineered features: review length, user behavior patterns, sentiment indicators',
      'Enhanced detection accuracy through multi-dimensional feature analysis',
    ],
    tags: ['Python', 'Machine Learning', 'NLP', 'Logistic Regression', 'Naive Bayes'],
    color: 'from-emerald-500 to-teal-400',
    icon: '🔍',
  },
];

export default function Projects() {
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
    <section id="projects" ref={ref} className="section-fade py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="card-hover group bg-slate-900 border border-slate-800 hover:border-sky-500/40 rounded-2xl overflow-hidden">
              {/* Header gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl group-hover:text-sky-400 transition-colors">{project.title}</h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Calendar size={12} className="text-slate-500" />
                        <span className="text-slate-500 text-xs">{project.date}</span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-slate-600 group-hover:text-sky-400 transition-colors mt-1" />
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Zap size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-md border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
