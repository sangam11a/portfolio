import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Publication {
  title: string;
  venue: string;
  year: string;
  type: 'IEEE' | 'IAC' | 'Research';
  icon: string;
  url: string;
  doi?: string;
  badgeText?: string;
}

const publications: Publication[] = [
  {
    title: 'CubeOS: A PX4 Autopilot-inspired flight software for Nepal\'s next-generation CubeSat bus',
    venue: '75th International Astronautical Congress (IAC 2024), Milan, Italy',
    year: '2024',
    type: 'IAC',
    icon: '🛰️',
    url: 'https://www.researchgate.net/publication/385012543_CubeOS_A_PX4_Autopilot-inspired_flight_software_for_Nepal\'s_next-generation_CubeSat_bus',
    badgeText: 'IAC 2024 / NuttX RTOS',
  },
  {
    title: 'Prasta Nepali: A Transformer based Approach for Automated Nepali Grammar (Byakaran) Error Detection and Correction',
    venue: '2025 International Conference on Inventive Computation Technologies (ICICT), IEEE',
    year: '2025',
    type: 'IEEE',
    icon: '🧠',
    url: 'https://doi.org/10.1109/ICICT64420.2025.11004703',
    doi: '10.1109/ICICT64420.2025.11004703',
    badgeText: 'IEEE Xplore',
  },
  {
    title: 'Detection of Seismo-Electromagnetic Waves Using Non-Boom Quad-Mag Technology on Nepal\'s 1U Slippers2Sat CubeSat',
    venue: '32nd IAA SmallSat Symposium / 76th International Astronautical Congress (IAC 2025)',
    year: '2025',
    type: 'IAC',
    icon: '📡',
    url: 'https://iafastro.directory/iac/author/sangam218/paper/100556/',
    badgeText: 'IAF Astro Paper 100556',
  },
  {
    title: 'Design and Demonstration of a Novel On-Chip Digipeater for Disaster Communication in Nepal\'s Middle School 1U CubeSat, Slippers2Sat',
    venue: '76th International Astronautical Congress (IAC 2025)',
    year: '2025',
    type: 'IAC',
    icon: '📻',
    url: 'https://iafastro.directory/iac/paper/id/101513/summary/',
    badgeText: 'IAF Astro Paper 101513',
  },
  {
    title: 'Comparative Study of Object Detection Models for Fresh and Rotten Apples and Tomatoes: Faster R-CNN, DETR, YOLOv8, and YOLOv12S',
    venue: '2025 International Conference on Inventive Computation Technologies (ICICT), IEEE',
    year: '2025',
    type: 'IEEE',
    icon: '🍎',
    url: 'https://doi.org/10.1109/ICICT64420.2025.11005373',
    doi: '10.1109/ICICT64420.2025.11005373',
    badgeText: 'IEEE Xplore',
  },
  {
    title: 'Bridging Space and Community: Nepal\'s Indigenous Youth Pioneering CubeSat Technology for Flood, Drought, and Earthquake Resilience',
    venue: '75th International Astronautical Congress (IAC 2024)',
    year: '2024',
    type: 'IAC',
    icon: '🌍',
    url: 'https://iafastro.directory/iac/paper/id/99621/summary/',
    badgeText: 'IAF Astro Paper 99621',
  },
  {
    title: 'Slippers2Sat Middle School CubeSat Project: Empowering Nepal\'s Marginalized Youth for a Spacefaring Future',
    venue: '75th International Astronautical Congress (IAC 2024)',
    year: '2024',
    type: 'IAC',
    icon: '🚀',
    url: 'https://iafastro.directory/iac/paper/id/95372/summary/',
    badgeText: 'IAF Astro Paper 95372',
  },
  {
    title: 'Nepal\'s Journey to Stars: Inspiring Marginalized Youth to Explore Space',
    venue: 'Research Publication / ResearchGate',
    year: '2024',
    type: 'Research',
    icon: '⭐',
    url: 'https://www.researchgate.net/publication/394259679_Nepal\'s_Journey_to_Stars_Inspiring_Marginalized_Youth_to_Explore_Space',
    badgeText: 'ResearchGate',
  },
];

const typeConfig: Record<string, { color: string; bg: string; border: string }> = {
  IEEE: { color: '#06b6d4', bg: '#06b6d408', border: '#06b6d420' },
  IAC: { color: '#8b5cf6', bg: '#8b5cf608', border: '#8b5cf620' },
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
          className="text-center mb-14"
        >
          <span className="text-[12px] font-mono text-accent-cyan tracking-[0.25em] uppercase">Research Output</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 gradient-text">Publications & Papers</h2>
          <p className="text-[14px] text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Peer-reviewed research contributions across CubeSat flight software, edge machine learning, seismo-electromagnetic sensing, and NLP.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="https://scholar.google.com/citations?user=8llUpnIAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-cyan/[0.08] border border-accent-cyan/25 text-accent-cyan text-xs font-mono font-medium hover:bg-accent-cyan/15 hover:border-accent-cyan/40 transition-all duration-300"
            >
              <span>🎓 Google Scholar Profile</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </a>
            <a
              href="https://www.researchgate.net/profile/Sangam-Thapa-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-emerald/[0.08] border border-accent-emerald/25 text-accent-emerald text-xs font-mono font-medium hover:bg-accent-emerald/15 hover:border-accent-emerald/40 transition-all duration-300"
            >
              <span>🔬 ResearchGate Profile</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </a>
          </div>
        </motion.div>

        <div className="space-y-3.5">
          {publications.map((pub, i) => {
            const tc = typeConfig[pub.type] || typeConfig.Research;
            return (
              <motion.a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.45 }}
                whileHover={{ x: 4, scale: 1.005 }}
                className="glass rounded-xl p-5 sm:p-6 glass-hover card-shine transition-all duration-300 group block relative border border-white/[0.06] hover:border-accent-cyan/30"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-base mt-0.5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: tc.bg, border: `1px solid ${tc.border}` }}
                  >
                    {pub.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-[14px] sm:text-[14.5px] font-semibold text-slate-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {pub.title}
                      </h4>
                      <span className="flex-shrink-0 text-slate-500 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-[11.5px] text-slate-400 font-medium">{pub.venue}</span>
                      <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 font-mono border border-white/[0.05]">
                        {pub.year}
                      </span>
                      <span
                        className="text-[10.5px] px-2.5 py-0.5 rounded-full font-medium tracking-wide"
                        style={{ backgroundColor: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}
                      >
                        {pub.type}
                      </span>
                      {pub.doi && (
                        <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-accent-cyan/[0.08] text-accent-cyan font-mono border border-accent-cyan/20">
                          DOI: {pub.doi}
                        </span>
                      )}
                      {pub.badgeText && !pub.doi && (
                        <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-white/[0.03] text-slate-400 font-mono border border-white/[0.06]">
                          {pub.badgeText}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
