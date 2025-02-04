import { motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../store/modal-context";

function IconCancel(props) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
  }, []);

  const modalCtx = useContext(ModalContext);
  return (
    <motion.button
      className={`text-white ${
        innerWidth <= 400 ? "mb-10" : innerWidth < 800 ? "mb-14" : "mb-20"
      }`}
      animate={{ rotate: 180 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, duration: 0.45 }}
      onClick={() => modalCtx.handleMenuClick()}
    >
      <motion.svg
        viewBox="0 0 470 1000"
        fill="currentColor"
        className="w-[100%] h-[100%]"
        height="6em"
        width="6em"
        exit={{ rotate: 360 }}
        transition={{ duration: 0.45 }}
        {...props}
      >
        <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
      </motion.svg>
    </motion.button>
  );
}

export default IconCancel;
