import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const contactInfo = [
  {
    icon: (<svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>),
    label: 'Location',
    value: 'Sipadol, Suryabinyak-8, Bhaktapur, Nepal',
    color: '#06b6d4',
  },
  {
    icon: (<svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>),
    label: 'Email',
    value: 'sangam.thapa218@gmail.com',
    href: 'mailto:sangam.thapa218@gmail.com',
    color: '#6366f1',
  },
  {
    icon: (<svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>),
    label: 'Google Scholar',
    value: 'citations?user=8llUpnIAAAAJ',
    href: 'https://scholar.google.com/citations?user=8llUpnIAAAAJ&hl=en',
    color: '#38bdf8',
  },
  {
    icon: (<svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693l-1.57-.393m15.6 0l1.455 3.637A2.25 2.25 0 0119.005 21H4.995a2.25 2.25 0 01-2.09-2.07L4.2 15.3" /></svg>),
    label: 'ResearchGate',
    value: 'profile/Sangam-Thapa',
    href: 'https://www.researchgate.net/profile/Sangam-Thapa',
    color: '#10b981',
  },
  {
    icon: (<svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>),
    label: 'LinkedIn',
    value: 'linkedin.com/in/sangam218',
    href: 'https://linkedin.com/in/sangam218',
    color: '#0ea5e9',
  },
  {
    icon: (<svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>),
    label: 'GitHub',
    value: 'github.com/sangam11a',
    href: 'https://github.com/sangam11a',
    color: '#e2e8f0',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-28 section-glow-top" ref={ref}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-cyan/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-mono text-accent-cyan tracking-[0.25em] uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 gradient-text">Contact Me</h2>
          <p className="text-[14px] text-slate-500 mt-4 max-w-md mx-auto leading-relaxed">
            Interested in collaboration on robotics, embedded systems, or space technology?
            Let's connect.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {contactInfo.map((item, i) => {
            const isLink = !!item.href;
            const Tag = isLink ? 'a' : 'div';
            const linkProps = isLink ? {
              href: item.href,
              ...(item.href!.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
            } : {};

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
                whileHover={{ y: -3 }}
              >
                <Tag
                  {...linkProps}
                  className={`glass rounded-xl p-5 flex items-center gap-4 glass-hover card-shine transition-all duration-300 group block ${
                    i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.color}10`,
                      color: item.color,
                      border: `1px solid ${item.color}20`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-500 uppercase tracking-[0.15em] font-medium">{item.label}</p>
                    <p className="text-[13px] font-medium text-slate-200 mt-0.5 truncate group-hover:text-white transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="mailto:sangam.thapa218@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-[14px] text-white relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-indigo rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            <span className="relative z-10">Send me an Email</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
