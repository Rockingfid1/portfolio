import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useContext } from "react";
import { ModalContext } from "../store/modal-context";
import IconCancel from "./icons/MenuCancel";
import { createPortal } from "react-dom";

export default function MenuModal({ modalOpen }) {
  const modalCtx = useContext(ModalContext);
  const dialogRef = useRef();

  useEffect(() => {
    if (modalOpen) {
      dialogRef.current.showModal();
    } else dialogRef.current.close();
  }, [modalOpen]);

  function handleClose(event) {
    if (event.key === "Escape") modalCtx.handleMenuClick();
  }

  return createPortal(
    <motion.dialog
      animate={{ x: [2, 6, 1] }}
      transition={{ duration: 0.5 }}
      exit={{ x: [2, 6, 1] }}
      ref={dialogRef}
      onKeyDown={handleClose}
      className="w-screen flex flex-col items-center justify-center sm:py-36 lp:pt-0 lp:pb-16 p-16 min-h-screen text-white bg-gray-900  backdrop:bg-black backdrop:opacity-70 shadow-xl lp:w-[30%] lp:left-[70%] 2md:pb-10 "
    >
      <IconCancel height="5em" width="5em" />

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-24 sm:gap-36 items-center 2md:gap-32"
      >
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.2, type: "" }}
          className="hover:text-red-500 sm:text-2xl md:text-2xl lg:text-3xl lp:text-xl"
        >
          <button onClick={() => modalCtx.handleRefClick(modalCtx.homeRef)}>
            Home
          </button>
        </motion.li>
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.2, type: "" }}
          className="hover:text-red-500 sm:text-2xl md:text-2xl lg:text-3xl lp:text-xl"
        >
          <button onClick={() => modalCtx.handleRefClick(modalCtx.aboutRef)}>
            About
          </button>
        </motion.li>
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.2, type: "" }}
          className="hover:text-red-500 sm:text-2xl md:text-2xl lg:text-3xl lp:text-xl"
        >
          <button onClick={() => modalCtx.handleRefClick(modalCtx.projectsRef)}>
            Projects
          </button>
        </motion.li>
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.2, type: "" }}
          className="hover:text-red-500 sm:text-2xl md:text-2xl lg:text-3xl lp:text-xl"
        >
          <button onClick={() => modalCtx.handleRefClick(modalCtx.skillsRef)}>
            Skills
          </button>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          transition={{ duration: 0.25, type: "spring", stiffness: 500 }}
        >
          <a
            href="mailTo: omfugo2006@gmail.com"
            className="m-auto mt-10 bg-green-500 rounded-lg text-white py-3 px-7 text-sm sm:text-2xl md:text-2xl lg:text-3xl lp:text-xl"
          >
            Contact Me
          </a>
        </motion.li>
      </motion.ul>
    </motion.dialog>,
    document.getElementById("modal")
  );
}
