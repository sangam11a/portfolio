import { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const EarthScene = lazy(() => import('./EarthScene'));

const roles = [
  'Embedded Systems Engineer',
  'Satellite Software Developer',
  'AI & Computer Vision Researcher',
  'Robotics & Automation Engineer',
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(role.slice(0, text.length + 1));
        if (text.length === role.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(role.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="font-mono text-accent-cyan text-[14px] sm:text-base">
      {text}
      <span className="animate-pulse text-accent-cyan/60">|</span>
    </span>
  );
}

function SceneFallback() {
  return (
    <div className="absolute inset-0 bg-deep-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,_rgba(6,182,212,0.06)_0%,_transparent_60%)]" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Earth */}
      <Suspense fallback={<SceneFallback />}>
        <EarthScene />
      </Suspense>

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-900 via-deep-900/75 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-900 via-transparent to-deep-900/50 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_transparent_30%,_rgba(3,6,20,0.5)_100%)] z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-2xl">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-14 bg-gradient-to-r from-accent-cyan to-transparent" />
            <span className="text-[12px] font-mono text-accent-cyan/70 tracking-[0.2em] uppercase">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mb-5"
          >
            <span className="block text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.08] tracking-tight">
              Sangam
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold gradient-text leading-[1.08] tracking-tight mt-1">
              Thapa
            </span>
          </motion.h1>

          {/* Typing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-7 mb-8"
          >
            <TypingText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-[14.5px] text-slate-400 leading-[1.8] mb-10 max-w-lg"
          >
            Building intelligent systems at the intersection of{' '}
            <span className="text-accent-cyan font-medium">space technology</span>,{' '}
            <span className="text-accent-indigo font-medium">AI/ML</span>, and{' '}
            <span className="text-accent-emerald font-medium">embedded hardware</span>.
            From CubeSat flight software to computer vision pipelines.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group relative px-7 py-3 rounded-xl font-semibold text-[13px] text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/15"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-indigo rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </a>
            <a
              href="#experience"
              className="px-7 py-3 rounded-xl font-semibold text-[13px] text-slate-300 border border-white/[0.08] hover:border-accent-cyan/25 hover:bg-accent-cyan/[0.03] hover:text-white transition-all duration-300"
            >
              View My Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex gap-10 mt-14"
          >
            {[
              { value: '8+', label: 'Publications' },
              { value: '3+', label: 'Years Exp.' },
              { value: 'AWS', label: 'Certified' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.15em] font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[10px] text-slate-600 mb-2.5 tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-slate-700/60 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 bg-accent-cyan/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
