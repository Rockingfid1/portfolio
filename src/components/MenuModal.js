import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { useEffect, useRef, useContext } from "react";
import { ModalContext } from "../store/modal-context";
import IconCancel from "./icons/MenuCancel";

export default function MenuModal({ modalOpen }) {
  const modalCtx = useContext(ModalContext);
  const dialogRef = useRef();

  useEffect(() => {
    if (modalOpen) {
      dialogRef.current.showModal();
    } else dialogRef.current.close();
  }, [modalOpen]);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modalCtx.closeModal();
  });

  return createPortal(
    <motion.dialog
      animate={{ x: [2, 6, 1] }}
      transition={{ duration: 0.5 }}
      exit={{ x: [2, 6, 1] }}
      ref={dialogRef}
      className="w-5/12 left-[60%] min-h-screen text-white bg-gray-900 flex flex-col items-center justify-center backdrop:bg-black backdrop:opacity-70 shadow-xl"
    >
      {modalOpen && <IconCancel />}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl modal flex flex-col gap-32 items-center"
      >
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.2, type: "" }}
          className="hover:text-red-500"
        >
          <button onClick={() => modalCtx.handleRefClick(modalCtx.homeRef)}>
            Home
          </button>
        </motion.li>
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.2, type: "" }}
          className="hover:text-red-500"
        >
          <button onClick={() => modalCtx.handleRefClick(modalCtx.aboutRef)}>
            About
          </button>
        </motion.li>
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.2, type: "" }}
          className="hover:text-red-500"
        >
          <button onClick={() => modalCtx.handleRefClick(modalCtx.projectsRef)}>
            Projects
          </button>
        </motion.li>
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.2, type: "" }}
          className="hover:text-red-500"
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
            className="m-auto mt-10 bg-green-500 rounded-lg text-white py-3 px-7 text-3xl"
          >
            Contact Me
          </a>
        </motion.li>
      </motion.ul>
    </motion.dialog>,
    document.getElementById("root")
  );
}
