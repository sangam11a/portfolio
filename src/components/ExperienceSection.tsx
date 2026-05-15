import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const experiences = [
  {
    title: 'Junior Software Engineer',
    company: 'Access System Nepal',
    date: '09/2025 – Present',
    location: 'Kathmandu, Nepal',
    color: '#06b6d4',
    icon: '⚡',
    bullets: [
      'Designed and implemented LoRaWAN-based asset monitoring systems, enabling real-time tracking and condition monitoring of distributed assets.',
      'Integrated multiple sensors (temperature, vibration, GPS, accelerometers, environmental sensors) into microcontroller-based systems (STM32F4/STM32WL) for robust data acquisition and processing.',
    ],
  },
  {
    title: 'Onboard Computer (OBC) Lead',
    company: 'Slippers2Sat — Antarikchya Pratisthan Nepal',
    date: '03/2024 – Present',
    location: 'Kathmandu, Nepal',
    color: '#6366f1',
    icon: '🛰️',
    bullets: [
      'Designed and implemented OBC systems using STM32F4/STM32WL microcontrollers with focus on real-time task scheduling and fault-tolerant control.',
      'Developed plug-and-play flight controller software inspired by PX4 autopilot, integrating machine learning for autonomous operations.',
      'Simulated robotic satellite behavior using Gazebo and PX4 SITL, bridging AI algorithms with embedded perception and control.',
      'Deployed U-Net models on STM32H7 for onboard image segmentation, enhancing perception capabilities for constrained hardware.',
      'Mentored indigenous students in designing and assembling CubeSats, promoting hands-on robotics and automation learning.',
    ],
  },
  {
    title: 'Software Developer — PHI-1 Collaboration',
    company: 'Antarikchya Pratisthan Nepal',
    date: '03/2023 – 02/2024',
    location: 'Kathmandu, Nepal',
    color: '#8b5cf6',
    icon: '🚀',
    bullets: [
      'Collaborated with Mohammed Bin Rashid Space Center (MBRSC), UAE for payload hosting on their 6-U CubeSats.',
      'Developing embedded systems software, enhancing team capabilities in drone technology, and payload hosting solutions.',
      'Adapted and implemented robust code using PX4 and related methodologies to improve the functionality and reliability of aerospace applications.',
      'Contributed to cross-functional teams focused on integrating machine learning algorithms for improved project outcomes.',
    ],
  },
  {
    title: 'Software Developer — Prasta Nepali',
    company: 'Academic Research Project',
    date: '11/2022 – 03/2023',
    location: 'Bhaktapur, Nepal',
    color: '#10b981',
    icon: '🧠',
    bullets: [
      'Developed a transformer-based NLP model for Nepali grammar correction.',
      'Created a custom dataset and trained sequence-to-sequence models for Byakaran error detection.',
      'Published findings at IEEE ICICT 2025; demonstrated local language model deployment.',
    ],
  },
  {
    title: 'Computer Vision Researcher — Fruit Detection',
    company: 'Academic Research Project',
    date: '04/2022 – 11/2022',
    location: 'Bhaktapur, Nepal',
    color: '#f59e0b',
    icon: '👁️',
    bullets: [
      'Built a multi-model object detection pipeline comparing YOLOv8, YOLOv12S, DETR, and Faster R-CNN.',
      'Curated and annotated a custom dataset of apples and tomatoes.',
      'Benchmarked models based on mAP and inference latency, optimizing for real-time edge deployment in low-power environments.',
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section id="experience" className="relative py-28 section-glow-top" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-indigo/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-mono text-accent-cyan tracking-[0.25em] uppercase">Career Path</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 gradient-text">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] md:left-[30px] top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-accent-cyan/40 via-accent-indigo/30 to-accent-violet/20" />
          </div>

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                className="relative pl-12 md:pl-[72px]"
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-[12px] md:left-[24px] top-7 w-[13px] h-[13px] rounded-full border-2"
                  style={{
                    borderColor: exp.color,
                    backgroundColor: expandedIndex === i ? exp.color : 'transparent',
                    boxShadow: expandedIndex === i ? `0 0 12px ${exp.color}60` : 'none',
                  }}
                  animate={expandedIndex === i ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 2, repeat: expandedIndex === i ? Infinity : 0 }}
                />

                <div
                  className={`glass rounded-2xl overflow-hidden card-shine transition-all duration-500 cursor-pointer ${
                    expandedIndex === i ? 'glass-hover ring-1' : 'hover:bg-white/[0.02]'
                  }`}
                  style={{
                    borderColor: expandedIndex === i ? `${exp.color}20` : undefined,
                  }}
                  onClick={() => setExpandedIndex(expandedIndex === i ? -1 : i)}
                >
                  {/* Top accent */}
                  {expandedIndex === i && (
                    <motion.div
                      layoutId="expAccent"
                      className="h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                    />
                  )}

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-start gap-3 min-w-0">
                        <span className="text-xl mt-0.5 flex-shrink-0">{exp.icon}</span>
                        <div className="min-w-0">
                          <h3 className="text-[15px] font-semibold text-white leading-snug">{exp.title}</h3>
                          <p className="text-[13px] font-medium mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-[11px] font-mono text-slate-500 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.05]">
                          {exp.date}
                        </span>
                        <p className="text-[11px] text-slate-600 mt-1.5">{exp.location}</p>
                      </div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === i ? 'auto' : 0,
                        opacity: expandedIndex === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-5 space-y-3">
                        {exp.bullets.map((bullet, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={expandedIndex === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: j * 0.08, duration: 0.4 }}
                            className="flex items-start gap-3 text-[13.5px] text-slate-400 leading-relaxed"
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: exp.color }}
                            />
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-600">
                      <motion.span
                        animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[10px]"
                      >
                        ▼
                      </motion.span>
                      {expandedIndex === i ? 'Collapse' : 'Expand details'}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
