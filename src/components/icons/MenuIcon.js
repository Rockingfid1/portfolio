import { motion } from "motion/react";
import { useContext } from "react";
import { ModalContext } from "../../store/modal-context";

function IconMenu(props) {
  const modalCtx = useContext(ModalContext);
  return (
    <motion.button
      className="text-white mr-2 h-fit w-fit m-auto"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, duration: 0.4 }}
      onClick={() => modalCtx.handleMenuClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"
        ></path>
      </svg>
    </motion.button>
  );
}

export default IconMenu;
