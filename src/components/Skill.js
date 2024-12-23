import { motion } from "motion/react";

export default function Skill({ name, image, value }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ y: [4, 12, 10, 7, 1], opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.45 }}
      className="border-4 border-opacity-50 border-black rounded-2xl bg-slate-500 w-[80%] sm:w-[65%] xl:w-[45%] lp:w-[45%] text-white text-2xl sm:text-3xl md:text-4xl lp:text-3xl flex flex-col items-center justify-center gap-10 m-auto p-5 shadow-lg"
    >
      <img src={image} alt={name} className="rounded-lg " />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="text-center p-6"
      >
        {name}
      </motion.p>
      {value && (
        <progress max="100" value={value}>
          {value}%
        </progress>
      )}
    </motion.li>
  );
}
