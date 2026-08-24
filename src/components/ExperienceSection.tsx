import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const experiences = [
  {
    title: 'Software & Backend Telemetry Engineer',
    company: 'Access System Nepal',
    date: '09/2025 – Present',
    location: 'Kathmandu, Nepal',
    color: '#06b6d4',
    icon: '⚡',
    bullets: [
      'Architected and implemented LoRaWAN-based telemetry & asset monitoring pipelines, enabling real-time condition tracking and automated alert dispatching.',
      'Engineered multi-sensor data acquisition firmware on STM32F4 & STM32WL microcontrollers (temperature, vibration, GPS, accelerometers) with robust backend API communication.',
      'Optimized low-power RF communication protocols and backend payload deserialization routines for continuous distributed monitoring.',
    ],
  },
  {
    title: 'Satellite On-Board Computer (OBC) Lead & Research Fellow',
    company: 'Slippers2Sat — Antarikchya Pratisthan Nepal / Nepal Space Foundation',
    date: '03/2024 – Present',
    location: 'Kathmandu, Nepal',
    color: '#6366f1',
    icon: '🛰️',
    bullets: [
      'Led the On-Board Computer (OBC) design and software development for the 1U Slippers2Sat CubeSat utilizing STM32F4/H7 and STM32WL SoCs.',
      'Architected "CubeOS", a modular, PX4 Autopilot-inspired CubeSat flight software system built on NuttX RTOS, presented at the 75th International Astronautical Congress (IAC 2024).',
      'Developed Hardware-in-the-Loop (HIL) simulations and autonomous robotic satellite behaviors using Gazebo and PX4 SITL.',
      'Deployed quantized U-Net neural networks on STM32H7 for on-orbit image segmentation and edge machine learning on constrained hardware.',
      'Mentored indigenous and marginalized middle school students in satellite assembly, flight software concepts, and space technology.',
    ],
  },
  {
    title: 'Satellite Flight Software Developer — PHI-1 Mission Collaboration',
    company: 'Antarikchya Pratisthan Nepal × Mohammed Bin Rashid Space Center (MBRSC, UAE)',
    date: '03/2023 – 02/2024',
    location: 'Kathmandu, Nepal & Dubai, UAE (Remote Collab)',
    color: '#8b5cf6',
    icon: '🚀',
    bullets: [
      'Collaborated with Mohammed Bin Rashid Space Center (MBRSC), UAE on payload hosting software for their 6-U CubeSat platform.',
      'Implemented robust embedded flight software routines and sensor interfaces adopting PX4 architectural standards.',
      'Contributed to cross-functional aerospace engineering teams focused on edge machine learning and drone autopilot capabilities.',
    ],
  },
  {
    title: 'Machine Learning Engineer — NLP & Transformer Architectures',
    company: 'Academic Research Project (Prasta Nepali)',
    date: '11/2022 – 03/2023',
    location: 'Bhaktapur, Nepal',
    color: '#10b981',
    icon: '🧠',
    bullets: [
      'Engineered an end-to-end Sequence-to-Sequence Transformer deep learning model for automated Nepali grammatical error detection and correction (Byakaran).',
      'Curated a custom linguistic dataset, achieving 90.45% training accuracy and 92.15% validation accuracy.',
      'Published and presented research at IEEE ICICT 2025 (DOI: 10.1109/ICICT64420.2025.11004703).',
    ],
  },
  {
    title: 'Computer Vision & Edge ML Researcher — Fruit Quality Detection',
    company: 'Academic Research Project',
    date: '04/2022 – 11/2022',
    location: 'Bhaktapur, Nepal',
    color: '#f59e0b',
    icon: '👁️',
    bullets: [
      'Built a comparative multi-model object detection benchmark comparing YOLOv8, YOLOv12S, DETR, and Faster R-CNN on 11,675+ annotated agricultural images.',
      'Demonstrated state-of-the-art performance with YOLOv12S achieving 99.31% mAP and 98.28% F1-Score for real-time edge deployment.',
      'Published and presented research at IEEE ICICT 2025 (DOI: 10.1109/ICICT64420.2025.11005373).',
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
