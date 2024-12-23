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
        className="text-center text-white text-3xl p-14 font-medium"
      >
        Skills
      </motion.p>

      <motion.ul
        className="grid grid-cols-1 gap-8 max-w-fit m-auto p-5"
        transition={{ staggerChildren: 0.3 }}
      >
        {SKILLS_DATA.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </motion.ul>
    </div>
  );
}
