import { motion } from "motion/react";
import { useContext } from "react";
import { ModalContext } from "../../store/modal-context";

function IconMenu(props) {
  const modalCtx = useContext(ModalContext);
  return (
    <motion.button
      className="text-white ml-15"
      animate={{ rotate: 180 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, duration: 0.4 }}
      onClick={() => modalCtx.handleMenuClick(true)}
    >
      <motion.svg
        viewBox="0 0 1024 1024"
        fill="currentColor"
        className="w-[170%] sm:w-[175%] md:w-[180%] lp:w-[70%]"
        height="4em"
        width="4em"
        {...props}
      >
        <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
      </motion.svg>
    </motion.button>
  );
}

export default IconMenu;
