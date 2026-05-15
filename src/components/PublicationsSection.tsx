import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const publications = [
  {
    title: 'CubeOS: A PX4 Autopilot-inspired flight software for Nepal\'s next-generation CubeSat bus',
    venue: 'International Astronautical Congress, 2024',
    year: '2024',
    type: 'Conference',
    icon: '🛰️',
  },
  {
    title: 'Prasta Nepali: A Transformer based Approach for Automated Nepali Grammar (Byakaran) Error Detection and Correction',
    venue: 'ICICT, IEEE, 2025',
    year: '2025',
    type: 'IEEE',
    icon: '📄',
  },
  {
    title: 'Detection of Seismo-Electromagnetic Waves Using Non-Boom Quad-Mag Technology on Nepal\'s 1U Slippers2Sat CubeSat',
    venue: 'Research Publication',
    year: '2024',
    type: 'Research',
    icon: '📡',
  },
  {
    title: 'Design and Demonstration of a Novel On-Chip Digipeater for Disaster Communication in Nepal\'s Middle School 1U CubeSat',
    venue: 'Research Publication',
    year: '2024',
    type: 'Research',
    icon: '📻',
  },
  {
    title: 'Bridging Space and Community: Nepal\'s Indigenous Youth Pioneering CubeSat Technology for Flood, Drought, and Earthquake Resilience',
    venue: 'Research Publication',
    year: '2024',
    type: 'Research',
    icon: '🌍',
  },
  {
    title: 'Slippers2Sat Middle School CubeSat Project: Empowering Nepal\'s Marginalized Youth for a Spacefaring Future',
    venue: 'Research Publication',
    year: '2024',
    type: 'Research',
    icon: '🚀',
  },
  {
    title: 'Nepal\'s Journey to Stars: Inspiring Marginalized Youth to Explore Space',
    venue: 'Research Publication',
    year: '2024',
    type: 'Research',
    icon: '⭐',
  },
  {
    title: 'Comparative Study of Object Detection Models for Fresh and Rotten Apples and Tomatoes: Faster R-CNN, DETR, YOLOv8, and YOLOv12S',
    venue: 'ICICT, IEEE, 2025',
    year: '2025',
    type: 'IEEE',
    icon: '🍎',
  },
];

const typeConfig: Record<string, { color: string; bg: string; border: string }> = {
  IEEE: { color: '#06b6d4', bg: '#06b6d408', border: '#06b6d420' },
  Conference: { color: '#8b5cf6', bg: '#8b5cf608', border: '#8b5cf620' },
  Research: { color: '#10b981', bg: '#10b98108', border: '#10b98120' },
};

export default function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="publications" className="relative py-28 section-glow-top" ref={ref}>
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-accent-violet/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-mono text-accent-cyan tracking-[0.25em] uppercase">Research Output</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 gradient-text">Publications</h2>
          <p className="text-[14px] text-slate-500 mt-4 max-w-md mx-auto leading-relaxed">
            Contributing to space technology, computer vision, and NLP through peer-reviewed research.
          </p>
        </motion.div>

        <div className="space-y-3">
          {publications.map((pub, i) => {
            const tc = typeConfig[pub.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                whileHover={{ x: 4 }}
                className="glass rounded-xl p-5 sm:p-6 glass-hover card-shine transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-base"
                    style={{ background: tc.bg, border: `1px solid ${tc.border}` }}
                  >
                    {pub.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13.5px] sm:text-[14px] font-semibold text-slate-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2.5 mt-2.5">
                      <span className="text-[11px] text-slate-500">{pub.venue}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 font-mono border border-white/[0.05]">
                        {pub.year}
                      </span>
                      <span
                        className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}
                      >
                        {pub.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
