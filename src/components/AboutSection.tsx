import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const interests = [
  { icon: '🤖', title: 'Robotic Manipulators & End-effectors', color: '#06b6d4' },
  { icon: '👁️', title: 'AI-based Perception (2D/3D) & Computer Vision', color: '#6366f1' },
  { icon: '🔌', title: 'Sensors & Embedded Control Systems', color: '#10b981' },
  { icon: '🌾', title: 'Agricultural Robotics and Automation', color: '#f59e0b' },
  { icon: '🛩️', title: 'UGV/UAV Applications in Precision Agriculture', color: '#f43f5e' },
];

const highlights = [
  { icon: '🛰️', text: 'CubeSat Flight Software (PX4-inspired)' },
  { icon: '🧠', text: 'AI/ML on Edge & Resource-Constrained Platforms' },
  { icon: '📡', text: 'LoRaWAN Sensor Networks & IoT' },
  { icon: '🎯', text: 'Real-time Perception & Control Systems' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-28 section-glow-top dot-pattern" ref={ref}>
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-accent-cyan/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-accent-indigo/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-mono text-accent-cyan tracking-[0.25em] uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 gradient-text">Engineering the Future</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Summary - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-7 sm:p-9 glass-hover card-shine transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Summary</h3>
              </div>
              <p className="text-[14.5px] text-slate-400 leading-[1.8] mb-5">
                Computer Engineer specializing in <span className="text-accent-cyan font-medium">robotics</span>, <span className="text-accent-indigo font-medium">embedded systems</span>, and intelligent
                automation with expertise in real-time control, perception, and AI-driven robotic
                applications. Experienced in developing and integrating hardware-software systems for
                robotic manipulators, UAV/UGV platforms, agricultural automation, and LoRaWAN-based
                sensor networks for asset monitoring with real-time alerts.
              </p>
              <p className="text-[14.5px] text-slate-400 leading-[1.8] mb-8">
                Skilled in designing embedded sensor systems, developing <span className="text-accent-violet font-medium">AI/ML-driven perception</span> algorithms, and simulating autonomous systems using ROS, PX4, and Gazebo.
                Proficient in Python, C++, MATLAB, and resource-constrained embedded platforms.
              </p>

              {/* Highlight chips */}
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent-cyan/20 transition-all duration-300"
                  >
                    <span className="text-lg">{h.icon}</span>
                    <span className="text-[13px] text-slate-300 font-medium">{h.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Research Interests - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Research Interests</h3>
            </div>
            <div className="space-y-3">
              {interests.map((interest, i) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="glass rounded-xl p-4 flex items-center gap-4 glass-hover card-shine transition-all duration-300 cursor-default group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${interest.color}10`, border: `1px solid ${interest.color}25` }}
                  >
                    {interest.icon}
                  </div>
                  <span className="text-[13.5px] text-slate-300 font-medium group-hover:text-white transition-colors duration-300 leading-snug">
                    {interest.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
