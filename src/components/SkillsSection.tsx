import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>),
    color: '#06b6d4',
    skills: ['Python', 'C++', 'C', 'MATLAB', 'C#', 'Bash', 'Java'],
  },
  {
    title: 'Frameworks & Platforms',
    icon: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25L12 22.5l-9.75-5.25 4.179-2.25" /></svg>),
    color: '#6366f1',
    skills: ['PyTorch', 'TensorFlow', 'NuttX RTOS', 'PX4', 'ROS', 'Gazebo', 'Spring Boot'],
  },
  {
    title: 'Domains',
    icon: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>),
    color: '#8b5cf6',
    skills: ['Embedded Systems', 'CubeSat Flight Software', 'Reinforcement Learning', 'NLP', 'Computer Vision'],
  },
  {
    title: 'Automation & Design',
    icon: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l3.22 3.22 7.1-7.1a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-8.98 8.98a1.5 1.5 0 01-2.24 0z" /></svg>),
    color: '#10b981',
    skills: ['Control Algorithms', 'PCB Design', 'CAD (Fusion 360)', 'Mechatronics Integration'],
  },
];

const certifications = [
  { title: 'AWS Solutions Architect Associate', sub: 'Sep 2025 – Sep 2028', icon: '☁️', color: '#f59e0b' },
  { title: 'Associate Python Developer', sub: 'DataCamp', icon: '🐍', color: '#10b981' },
  { title: 'AI Nanodegree', sub: 'Udacity', icon: '🤖', color: '#6366f1' },
];

const awards = [
  { title: 'Rising Star Innovation — ICT Award 2023', icon: '🏆', color: '#f59e0b' },
  { title: 'Rising Star Innovation — ICT Award 2022', icon: '🏆', color: '#f59e0b' },
  { title: 'SE Asia Top 5 — Microsoft Imagine Cup 2022', icon: '🌏', color: '#3b82f6' },
  { title: 'AWS AI & ML Fellow 2022', icon: '⭐', color: '#8b5cf6' },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-28 section-glow-top dot-pattern" ref={ref}>
      <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-accent-cyan/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-mono text-accent-cyan tracking-[0.25em] uppercase">Technical Arsenal</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 gradient-text">Skills & Expertise</h2>
        </motion.div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 glass-hover card-shine transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cat.color}12`, border: `1px solid ${cat.color}25`, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-white">{cat.title}</h3>
                <div className="flex-1 h-px ml-1" style={{ background: `linear-gradient(to right, ${cat.color}20, transparent)` }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 + j * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3.5 py-1.5 text-[12.5px] font-medium rounded-lg border cursor-default transition-all duration-300"
                    style={{
                      color: cat.color,
                      borderColor: `${cat.color}20`,
                      backgroundColor: `${cat.color}06`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certs + Awards */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent-amber/10 border border-accent-amber/20 flex items-center justify-center text-sm">📜</div>
              <h3 className="text-[15px] font-semibold text-white">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  whileHover={{ x: 5 }}
                  className="glass rounded-xl p-4 flex items-center gap-4 glass-hover card-shine transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}20` }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-white">{cert.title}</p>
                    {cert.sub && <p className="text-[11px] text-slate-500 mt-0.5">{cert.sub}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent-rose/10 border border-accent-rose/20 flex items-center justify-center text-sm">🏅</div>
              <h3 className="text-[15px] font-semibold text-white">Awards</h3>
            </div>
            <div className="space-y-3">
              {awards.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: 15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  whileHover={{ x: 5 }}
                  className="glass rounded-xl p-4 flex items-center gap-4 glass-hover card-shine transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: `${award.color}10`, border: `1px solid ${award.color}20` }}
                  >
                    {award.icon}
                  </div>
                  <p className="text-[13px] font-medium text-white">{award.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
