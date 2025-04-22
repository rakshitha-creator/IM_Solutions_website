'use client';

import { motion } from 'framer-motion';

const slideVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { y: '-100%', opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } },
};

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideVariants}
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
}