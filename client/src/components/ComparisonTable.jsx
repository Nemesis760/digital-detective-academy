import { motion } from 'framer-motion';
// Styles imported in index.css

function ComparisonTable({ isTurkish, data }) {
  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <div className="comparison-table-container">
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>{isTurkish ? 'İşletim Sistemi' : 'Operating System'}</th>
              <th>{isTurkish ? 'Açıklama' : 'Description'}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <motion.tr
                key={item.name}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                className="table-row"
              >
                <td className="os-name">
                  <span className="os-icon">{item.icon}</span>
                  <span className="os-title">{item.name}</span>
                </td>
                <td className="os-description">
                  {isTurkish ? item.desc_tr : item.desc_en}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComparisonTable;
