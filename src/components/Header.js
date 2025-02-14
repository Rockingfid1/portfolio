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
  }, []);

  console.log(innerWidth);

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
          className="w-[50px] sm:w-[70px] 2md:w-[100px]   shadow-black"
          initial={{ rotate: "-12deg" }}
          whileHover={{ rotate: "55deg", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {!modalCtx.shouldStick && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-base sm:text-xl 2xl:text-2xl text-white font-medium"
          >
            Michaelfrank Okoye
          </motion.p>
        )}
      </span>

      {!modalCtx.menuClick && (
        <IconMenu
          height={innerWidth < 900 ? "2em" : "3em"}
          width={innerWidth < 900 ? "2em" : "3em"}
        />
      )}
    </motion.nav>
  );
}
