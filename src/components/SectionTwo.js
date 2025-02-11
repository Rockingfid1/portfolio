import { motion } from "motion/react";
import { useContext, useState } from "react";
import TabInfo from "./TabInfo";
import { ModalContext } from "../store/modal-context";

export default function SectionTwo() {
  const modalCtx = useContext(ModalContext);

  const [tab, setTab] = useState({
    infoTab: true,
    goalTab: false,
    hobbiesTab: false,
  });

  function handleButtonClick(tab) {
    if (tab === "infoTab") {
      setTab({ infoTab: true, goalTab: false, hobbiesTab: false });
    } else if (tab === "goalTab") {
      setTab({ infoTab: false, goalTab: true, hobbiesTab: false });
    } else setTab({ infoTab: false, goalTab: false, hobbiesTab: true });
  }

  return (
    <section
      ref={modalCtx.aboutRef}
      className="w-screen min-h-fit page-color-two p-10 border-y-2 border-opacity-85 border-black shadow-2xl shadow-black"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl mb-10 font-semibold lp:text-4xl"
      >
        About
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [1, 7, 1] }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-row text-base sm:text-xl md:text-2xl xl:text-3xl lp:text-2xl justify-center text-white relative gap-4 sm:gap-5 md:gap-6 lp:gap-1 mb-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleButtonClick("infoTab")}
            className={`shadow-sm shadow-black rounded-lg py-2 px-2 ${
              tab.infoTab ? "bg-green-700" : "bg-green-500"
            }`}
          >
            My Info
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleButtonClick("goalTab")}
            className={`shadow-sm shadow-black rounded-lg py-2 px-2 ${
              tab.goalTab ? "bg-green-700" : "bg-green-500"
            }`}
          >
            My Goals
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleButtonClick("hobbiesTab")}
            className={`shadow-sm shadow-black rounded-lg py-2 px-2 ${
              tab.hobbiesTab ? "bg-green-700" : "bg-green-500"
            }`}
          >
            My Hobbies
          </motion.button>
        </div>
        <div
          className={`bg-slate-600 rounded-lg min-h-[400px]
          w-[100%] sm:w-[90%] md:w-[80%] 2xl:w-[55%] lp:w-[50%]
          text-xl
           m-auto p-14 text-white`}
        >
          {tab.infoTab && <TabInfo info="info" />}
          {tab.goalTab && <TabInfo info="goal" />}
          {tab.hobbiesTab && <TabInfo info="hobbies" />}
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.25, type: "spring", stiffness: 500 }}
          href="mailTo: omfugo2006@gmail.com"
          className="m-auto mt-10 bg-green-500 rounded-lg text-white py-3 px-7 text-xl sm:text-2xl md:text-3xl xl:text-4xl lp:text-3xl"
        >
          Email Me
        </motion.a>
      </motion.div>
    </section>
  );
}
