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
      animate={{ y: [1, 2, 0] }}
      className={`flex z-50 flex-row bg-black py-4 px-5 gap-16 bg-opacity-40 justify-between lp:pr-16 ${
        modalCtx.shouldStick && "fixed w-screen"
      }`}
    >
      <span className="flex flex-row items-center gap-3">
        <motion.img
          src={logo}
          className="w-[20%] 2xl:w-[10%] lp:w-[7%] md:w-[11%] shadow-black"
          initial={{ rotate: "-12deg" }}
          whileHover={{ rotate: "55deg", scale: 1.3 }}
          transition={{ duration: 0.3 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-lg sm:text-xl md:text-xl lg:text-4xl lp:text-2xl text-white font-medium"
        >
          Michaelfrank Okoye
        </motion.p>
      </span>
      <AnimatePresence>{!modalCtx.menuClick && <IconMenu />}</AnimatePresence>
      <AnimatePresence>{modalCtx.menuClick && <IconCancel />}</AnimatePresence>
    </motion.nav>
  );
}
