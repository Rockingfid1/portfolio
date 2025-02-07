import { motion } from "motion/react";
import { SKILLS_DATA } from "../dummy";
import Skill from "./Skill";
import { ModalContext } from "../store/modal-context";
import { useContext } from "react";

export default function SkillsPage() {
  const modalCtx = useContext(ModalContext);
  return (
    <div ref={modalCtx.skillsRef} className="mt-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center text-white text-3xl p-14 sm:text-4xl md:text-5xl xl:p-24 sm:p-20 font-medium"
      >
        Skills
      </motion.p>

      <motion.ul
        className={`grid 
          content-center
          justify-items-center
          grid-cols-1 
          2md:grid-cols-2
        2xl:grid-cols-3 
        gap-10
        2md:gap-20 w-[100%] 
       p-5`}
      >
        {SKILLS_DATA.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </motion.ul>
    </div>
  );
}
