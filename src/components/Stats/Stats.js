import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import profile from '../../config/profile';
import './Stats.css';

const Counter = ({ target, start }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return undefined;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      current = Math.min(target, current + step);
      setValue(current);
      if (current >= target) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [target, start]);
  return value;
};

const Stats = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const stats = [
    { key: 'years', icon: 'fas fa-calendar-check' },
    { key: 'projects', icon: 'fas fa-layer-group' },
    { key: 'technologies', icon: 'fas fa-microchip' },
    { key: 'countries', icon: 'fas fa-globe-americas' },
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.key}
            className="stat-item card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <i className={s.icon}></i>
            <h3 className="mono">
              <Counter target={profile.stats[s.key]} start={inView} />+
            </h3>
            <p>{t(`stats.${s.key}`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
