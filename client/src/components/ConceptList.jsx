import { motion } from 'framer-motion';

function ConceptList({ isTurkish, concepts }) {
  return (
    <div className="concept-list">
      {concepts.map((concept, index) => (
        <motion.div
          key={index}
          className="concept-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h4>{isTurkish ? concept.title_tr : concept.title_en}</h4>
          <p>{isTurkish ? concept.desc_tr : concept.desc_en}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default ConceptList;
