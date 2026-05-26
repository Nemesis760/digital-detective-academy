import { motion } from 'framer-motion';

const CompletionScreen = ({ title, description, countdown, nextLabel, buttonLabel, onNavigate, emoji = '🎉' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(10,15,40,0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}
  >
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
      style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
        borderRadius: '24px', padding: '48px 40px', textAlign: 'center',
        maxWidth: '460px', width: '90%',
        boxShadow: '0 25px 80px rgba(102,126,234,0.4)',
        border: '1px solid rgba(167,139,250,0.3)',
      }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ fontSize: '4rem', marginBottom: '16px' }}
      >
        {emoji}
      </motion.div>

      <h2 style={{ color: 'white', fontWeight: 900, fontSize: '1.8rem', margin: '0 0 10px' }}>
        {title}
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', margin: '0 0 24px', lineHeight: 1.6 }}>
        {description}
      </p>

      {onNavigate && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              background: 'rgba(167,139,250,0.2)', border: '3px solid #a78bfa',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', fontWeight: 900, color: '#a78bfa',
            }}>
              {countdown}
            </div>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
              {nextLabel}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onNavigate}
            style={{
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white', border: 'none', borderRadius: '12px',
              fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(102,126,234,0.4)',
            }}
          >
            {buttonLabel}
          </motion.button>
        </>
      )}
    </motion.div>
  </motion.div>
);

export default CompletionScreen;
