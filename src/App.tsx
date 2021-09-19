import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };

  function open() {
    setModalOpen(true);
  }

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}>
        Launch Modal
      </motion.button>
      {modalOpen && (
        <Modal modalOpen={modalOpen} handleClose={close} text={'사람 여기있어요~~'} />
      )}

      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} text={`사람 여기있어요~~`} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
