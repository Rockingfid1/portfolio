import logo from "../assets/images/reminder-app-logo.png";
import { motion } from "motion/react";
import IconMenu from "./icons/MenuIcon";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../store/modal-context";

export default function Header() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setInnerWidth(window.innerWidth)
      );
  }, []);

  return (
    <motion.nav
      animate={{ y: [1, 2, 0] }}
      className={`flex z-50 flex-row bg-black py-4 md:py-2 px-5 gap-16 bg-opacity-40 justify-between lp:pr-16 ${
        modalCtx.shouldStick && "fixed w-screen"
      }`}
    >
      <span className="flex flex-row items-center gap-3">
        <motion.img
          src={logo}
          className="w-[15%] 2xl:w-[10%] lp:w-[7%] md:w-[11%] shadow-black"
          initial={{ rotate: "-12deg" }}
          whileHover={{ rotate: "55deg", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {!modalCtx.shouldStick && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-lg sm:text-xl text-white font-medium"
          >
            Michaelfrank Okoye
          </motion.p>
        )}
      </span>

      {!modalCtx.menuClick && (
        <IconMenu
          height={
            innerWidth < 800 && innerWidth > 400
              ? "6.5em"
              : innerWidth <= 400
              ? "8em"
              : "2.5em"
          }
          width={
            innerWidth < 800 && innerWidth > 400
              ? "6.5em"
              : innerWidth <= 400
              ? "8em"
              : "2.5em"
          }
        />
      )}
    </motion.nav>
  );
}
