import { motion } from "motion/react";

export default function Project({ image, name, url, description }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ y: [4, 12, 10, 7, 1], opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`border-4 border-opacity-20
         border-black rounded-lg 
         bg-zinc-800 
         w-[100%]
         2md:w-[50%] 
         text-white
          text-xl 
          sm:text-2xl 
          md:text-2xl 
          lp:text-xl 
          flex flex-col items-center justify-center gap-12 pb-11 shadow-lg`}
    >
      <img
        src={image}
        alt={name}
        className="rounded-lg w-[100%] h-[100%] object-cover"
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="text-center w-[70%] whitespace-pre-wrap
            text-xl
           "
      >
        {description}
      </motion.p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 500 }}
        className={`bg-green-500 
           rounded-lg 
           text-xl whitespace-pre-wrap
          py-2 px-5 sm:py-3 sm:px-7`}
        href={url}
      >
        {name}
      </motion.a>
    </motion.li>
  );
}
