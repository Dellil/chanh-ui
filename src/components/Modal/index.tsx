import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

interface Props {
  handleClose: () => void;
  text: string;
  modalOpen: boolean;
}

const dropIn = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.1,
      stiffness: 500,
      damping: 25,
    },
  },
  exit: { y: '100vh', opacity: 0 },
};

const Modal: React.FC<Props> = ({ handleClose, text }) => {
  return (
    <>
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          className="modal orange-gradient"
          initial="hidden"
          animate="visible">
          <p>{text}</p>
          <button onClick={handleClose}>Close</button>
        </motion.div>
      </Backdrop>
    </>
  );
};

export default Modal;
