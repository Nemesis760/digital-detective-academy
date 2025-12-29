import { motion } from 'framer-motion';
// Styles imported in index.css

function FlowChart({ isTurkish, title, steps }) {
  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  const arrowVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.15 + 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <div className="flow-chart-container">
      <h3 className="flow-chart-title">{title}</h3>
      
      <div className="flow-chart">
        {steps.map((step, index) => (
          <div key={step.step} className="flow-step-wrapper">
            {/* Adım Kutusu */}
            <motion.div
              className="flow-step"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="step-number">{step.step}</div>
              <h4 className="step-title">
                {isTurkish ? step.title_tr : step.title_en}
              </h4>
              <p className="step-description">
                {isTurkish ? step.desc_tr : step.desc_en}
              </p>
            </motion.div>

            {/* Ok (son adımdan sonra gösterilmez) */}
            {index < steps.length - 1 && (
              <motion.div
                className="flow-arrow"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                ↓
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="flow-chart-footer">
        <p className="footer-text">
          {isTurkish
            ? '💡 Her adımı sırasıyla takip et ve sorunu çöz!'
            : '💡 Follow each step in order to solve the problem!'}
        </p>
      </div>
    </div>
  );
}

export default FlowChart;
