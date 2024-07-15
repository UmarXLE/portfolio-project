"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './projects.module.scss';

interface itemInterface {
    id: string;
    title: string;
    subtitle: string;
    description: string;
}

const ProjectsBLog = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const items: itemInterface[] = [
    {
      id: '1',
      title: 'Card 1',
      subtitle: 'Information 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      title: 'Card 2',
      subtitle: 'Information 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: '3',
      title: 'Card 3',
      subtitle: 'Information 3',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: '4',
      title: 'Card 4',
      subtitle: 'Information 4',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <motion.div className={styles.appContainer}>
      <div className={styles.cardGrid}>
        {items.map((item) => (
          <motion.div
            className={`${styles.card} ${selectedId === item.id ? styles.cardSelected : ''}`}
            layoutId={`card-container-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            key={item.id}
            initial={{ scale: 1 }}
            animate={{ scale: selectedId === item.id ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.cardContent}>
              <motion.h2 className={styles.cardTitle}>{item.title}</motion.h2>
              <motion.h5 className={styles.cardSubtitle}>{item.subtitle}</motion.h5>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {items.map((item) =>
              item.id === selectedId ? (
                <motion.div
                  className={styles.modal}
                  layoutId={`card-container-${item.id}`}
                  key={item.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <motion.div className={styles.modalContent}>
                    <motion.button
                      className={styles.closeButton}
                      onClick={() => setSelectedId('')}
                    >
                      Close
                    </motion.button>
                    <motion.h2 className={styles.modalTitle}>{item.title}</motion.h2>
                    <motion.h5 className={styles.modalSubtitle}>{item.subtitle}</motion.h5>
                    <motion.p className={styles.modalDescription}>{item.description}</motion.p>
                    <motion.p
                      className={styles.additionalContent}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Additional content can go here!
                    </motion.p>
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsBLog;
