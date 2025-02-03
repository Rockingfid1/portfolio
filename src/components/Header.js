import logo from "../assets/images/reminder-app-logo.png";
import { motion } from "motion/react";
import IconMenu from "./icons/MenuIcon";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../store/modal-context";

export default function Header() {
  const [innerWidth, setInnerWidth] = useState();
  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
  }, []);

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
          className="w-[15%] 2xl:w-[10%] lp:w-[7%] md:w-[11%] shadow-black"
          initial={{ rotate: "-12deg" }}
          whileHover={{ rotate: "55deg", scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {!modalCtx.shouldStick && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-lg sm:text-xl md:text-xl lg:text-4xl lp:text-2xl text-white font-medium"
          >
            Michaelfrank Okoye
          </motion.p>
        )}
      </span>

      {!modalCtx.menuClick && (
        <IconMenu
          height={innerWidth < 800 ? "6.5em" : "3em"}
          width={innerWidth < 800 ? "6.5em" : "3em"}
        />
      )}
    </motion.nav>
  );
}
