import React from 'react';
import { motion } from 'framer-motion';
import './Loading.css';

const Loading = ({ fullScreen = false }) => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2
      }
    },
    end: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const circleVariants = {
    start: {
      y: "0%"
    },
    end: {
      y: "100%"
    }
  };

  const circleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  };

  const LoadingContent = () => (
    <div className={`loading-container ${fullScreen ? 'fullscreen' : ''}`}>
      <div className="loading-content">
        <motion.div
          className="loading-circles"
          variants={containerVariants}
          initial="start"
          animate="end"
        >
          <motion.div
            className="loading-circle"
            variants={circleVariants}
            transition={circleTransition}
          />
          <motion.div
            className="loading-circle"
            variants={circleVariants}
            transition={{ ...circleTransition, delay: 0.1 }}
          />
          <motion.div
            className="loading-circle"
            variants={circleVariants}
            transition={{ ...circleTransition, delay: 0.2 }}
          />
        </motion.div>
        <motion.p
          className="loading-text"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Cargando...
        </motion.p>
      </div>
    </div>
  );

  return <LoadingContent />;
};

export default Loading; 