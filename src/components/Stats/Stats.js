import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Stats.css';

const Stats = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    support: '24/7',
    experience: 0
  });

  const statsData = useMemo(() => [
    { 
      icon: 'fas fa-users', 
      target: 50, 
      suffix: '+', 
      label: t('stats.clients'),
      key: 'clients'
    },
    { 
      icon: 'fas fa-project-diagram', 
      target: 100, 
      suffix: '+', 
      label: t('stats.projects'),
      key: 'projects'
    },
    { 
      icon: 'fas fa-clock', 
      target: '24/7', 
      suffix: '', 
      label: t('stats.support'),
      key: 'support'
    },
    { 
      icon: 'fas fa-award', 
      target: 5, 
      suffix: '+', 
      label: t('stats.experience'),
      key: 'experience'
    }
  ], [t]);

  useEffect(() => {
    if (inView) {
      const animateCounters = () => {
        statsData.forEach((stat) => {
          if (stat.key === 'support') return; // Skip 24/7 as it doesn't need animation
          
          let start = 0;
          const end = stat.target;
          const duration = 2000; // 2 seconds
          const increment = end / (duration / 16); // 60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCounters(prev => ({ ...prev, [stat.key]: end }));
              clearInterval(timer);
            } else {
              setCounters(prev => ({ ...prev, [stat.key]: Math.floor(start) }));
            }
          }, 16);
        });
      };

      animateCounters();
    }
  }, [inView, statsData]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.i 
                className={stat.icon}
                whileHover={{ 
                  rotateY: 360,
                  color: "var(--bg-white)"
                }}
                transition={{ duration: 0.6 }}
              />
              <motion.h3
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + 0.5,
                  type: "spring",
                  stiffness: 150
                }}
              >
                {stat.key === 'support' ? stat.target : counters[stat.key]}{stat.suffix}
              </motion.h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats; 