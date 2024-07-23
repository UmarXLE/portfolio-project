"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './projects.module.scss';

interface itemInterface {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  img?: string,
}

const ProjectsBLog = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const items: itemInterface[] = [
    {
      id: '1',
      title: 'ASIA Brand',
      subtitle: 'CRM - plant automation system',
      description: 'In this project, such work was automated as: viewing employee statistics, managing and distributing tasks for employees , displaying KPIs for each employee , interacting with customers , that is, placing an order , refund , payment , etc. The CRM system accelerated the work of the plant, so that employees did not have to rummage through 1c files, all the necessary tools were available on the website',
      img: "/assets/images/project-1.png"
    },
    {
      id: '2',
      title: 'Agrohub Academy',
      subtitle: 'Web applications for mushroom business',
      description: 'This project is a website for getting acquainted with mushroom cultivation. Where you can not only view articles , but also sign up for courses. The project has been integrated with the GetCourse learning platform',
      img: "/assets/images/project-3.jpg"
    },
    {
      id: '3',
      title: 'Kapitik Art Studio ',
      subtitle: 'Wall panel store web applications',
      description:
        'The landing page of the wall panel store application . This project solved the problem of attracting customers. On the website, the client can view all the wall panel models available to him. The site is made in a minimalist style, where all the necessary information is available at the click of a finger',
      img: "/assets/images/project-4.png"

    },
    {
      id: '4',
      title: 'Beauty Pro',
      subtitle: 'Beauty Pro - online marketplace',
      description:
        'This project is a convenient marketplace for the sale of cosmetics. The client side of the website has been developed, as well as a crm system for managing content on the website',
        img: "/assets/images/project-2.jpg"
      },
  ];

  return (
    <motion.div className={styles.appContainer} >
      <div className={styles.cardGrid}>
        {items.map((item) => (
          <motion.div
            style={{ background: `url(${item.img})`, backgroundSize: 'cover' }}
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
