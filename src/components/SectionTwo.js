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
    index: 0,
  });

  function handleButtonClick(tab, index) {
    if (tab === "infoTab") {
      setTab({ infoTab: true, goalTab: false, hobbiesTab: false, index });
    } else if (tab === "goalTab") {
      setTab({ infoTab: false, goalTab: true, hobbiesTab: false, index });
    } else setTab({ infoTab: false, goalTab: false, hobbiesTab: true, index });
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
        className="text-center text-6xl mb-24 font-medium"
      >
        About
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [1, 7, 1] }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-row text-3xl justify-center text-white relative gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => handleButtonClick("infoTab", 0)}
            className={` shadow-md shadow-black rounded-lg py-3 px-6 ${
              tab.infoTab ? "bg-black" : "bg-green-500"
            }`}
          >
            My Info
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => handleButtonClick("goalTab", 1)}
            className={` shadow-md shadow-black rounded-lg py-3 px-6 ${
              tab.goalTab ? "bg-black" : "bg-green-500"
            }`}
          >
            My Goals
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => handleButtonClick("hobbiesTab", 2)}
            className={` shadow-md shadow-black rounded-lg py-3 px-6 ${
              tab.hobbiesTab ? "bg-black" : "bg-green-500"
            }`}
          >
            My Hobbies
          </motion.button>
        </div>
        <div className="bg-slate-600 rounded-lg w-[50%] min-h-fit text-2xl m-auto p-14 text-white">
          {tab.infoTab && <TabInfo info="info" />}
          {tab.goalTab && <TabInfo info="goal" />}
          {tab.hobbiesTab && <TabInfo info="hobbies" />}
        </div>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          transition={{ duration: 0.25, type: "spring", stiffness: 500 }}
          href="mailTo: omfugo2006@gmail.com"
          className="m-auto mt-10 bg-green-500 rounded-lg text-white py-3 px-7 text-3xl"
        >
          Email Me
        </motion.a>
      </motion.div>
    </section>
  );
}
