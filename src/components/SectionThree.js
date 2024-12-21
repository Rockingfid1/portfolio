import { motion } from "motion/react";
import { DUMMY_DATA } from "../dummy";
import Project from "./Project";
import SkillsPage from "./Skills";
import { ModalContext } from "../store/modal-context";
import { useContext } from "react";

export default function SectionThree() {
  const modalCtx = useContext(ModalContext);
  return (
    <section
      ref={modalCtx.projectsRef}
      className="w-screen h-fit page-color pb-20"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl text-center p-36 text-white"
      >
        Projects
      </motion.p>
      <motion.ul
        className="grid grid-rows-3 gap-8 "
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {DUMMY_DATA.map((data) => (
          <Project key={data.url} {...data} />
        ))}
      </motion.ul>

      <SkillsPage />
    </section>
  );
}
