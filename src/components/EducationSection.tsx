import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="relative py-28 section-glow-top dot-pattern" ref={ref}>
      <div className="absolute top-0 -right-40 w-96 h-96 bg-accent-emerald/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-mono text-accent-cyan tracking-[0.25em] uppercase">Academic Background</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 gradient-text">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-7 sm:p-9 glass-hover card-shine transition-all duration-500 relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-violet" />

            <div className="flex items-start gap-5">
              <motion.div
                className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-indigo/10 border border-white/[0.06] flex items-center justify-center text-2xl"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                🎓
              </motion.div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Khwopa Engineering College</h3>
                <p className="text-accent-cyan text-[14px] font-medium mt-1">Bachelor's in Computer Engineering</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                    <span className="text-[13px] text-slate-400">Graduated: September 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
                    <span className="text-[13px] text-slate-400">
                      GPA: <span className="text-white font-semibold">3.52 / 4.0</span>
                    </span>
                  </div>
                </div>

                {/* GPA bar */}
                <div className="mt-7">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] text-slate-500 uppercase tracking-[0.15em] font-medium">Academic Performance</span>
                    <span className="text-[11px] font-mono text-accent-cyan">88%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-indigo"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '88%' } : {}}
                      transition={{ delay: 0.7, duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
