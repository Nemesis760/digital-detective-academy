import { motion } from 'framer-motion';

export default function ImageLightbox({ src, alt, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 3000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'zoom-out', padding: '20px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: '95vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '16px', right: '20px',
          background: 'rgba(255,255,255,0.15)', border: 'none',
          color: 'white', fontSize: '1.5rem', cursor: 'pointer',
          borderRadius: '50%', width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>
    </motion.div>
  );
}
