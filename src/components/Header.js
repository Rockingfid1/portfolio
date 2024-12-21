import logo from "../assets/images/reminder-app-logo.png";
import { AnimatePresence, motion } from "motion/react";
import IconMenu from "./icons/MenuIcon";
import IconCancel from "./icons/MenuCancel";
import { useContext } from "react";
import { ModalContext } from "../store/modal-context";

export default function Header() {
  const modalCtx = useContext(ModalContext);

  return (
    <motion.nav
      animate={{ y: [1, 4, 1] }}
      className={`flex z-50 flex-row bg-black py-2 pl-7 pr-11 bg-opacity-40 justify-between ${
        modalCtx.shouldStick && "fixed w-screen"
      }`}
    >
      <span className="flex flex-row items-center gap-3">
        <motion.img
          src={logo}
          alt="header logo"
          className="w-[10%] shadow-black"
          initial={{ rotate: "-12deg" }}
          whileHover={{ rotate: "55deg", scale: 1.3 }}
          transition={{ duration: 0.3 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl text-white font-medium"
        >
          Michaelfrank Okoye
        </motion.p>
      </span>
      {!modalCtx.menuClick && (
        <IconMenu initial={{ rotate: 0 }} animate={{ rotate: 180 }} />
      )}
      {modalCtx.menuClick && <IconCancel />}
    </motion.nav>
  );
}
