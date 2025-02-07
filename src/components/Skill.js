import { motion } from "motion/react";

export default function Skill({ name, image, value }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ y: [4, 12, 10, 7, 1], opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.45 }}
      className={`border-4 border-opacity-50 overflow-hidden
         border-black rounded-2xl bg-slate-500 
         w-[70%]
        h-[100%]

         text-white text-2xl 
         sm:text-3xl md:text-3xl 
         flex flex-col items-center justify-center 
         gap-10 m-auto shadow-lg pb-7`}
    >
      <img
        src={image}
        alt={name}
        className={`${
          name === "Material UI" || name === "React Native"
            ? "w-[100%] h-[100%]"
            : "w-[70%] h-[70%]"
        } object-contain`}
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="text-center p-6 2xl:text-4xl lp:text-4xl "
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
