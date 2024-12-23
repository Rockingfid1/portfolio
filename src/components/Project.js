import { motion } from "motion/react";

export default function Project({ image, name, url, description }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ y: [4, 12, 10, 7, 1], opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`border-4 border-opacity-20 border-black rounded-lg bg-zinc-800 w-4/12 text-white text-2xl flex flex-col items-center justify-center gap-10 m-auto pb-11 shadow-lg mt-24 -mb-11 ${
        name === "Forkify"
      } `}
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
        className="text-center p-6"
      >
        {description}
      </motion.p>
      <motion.a
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 500 }}
        className="bg-green-500 py-3 px-7 rounded-lg text-4xl"
        href={url}
      >
        {name}
      </motion.a>
    </motion.li>
  );
}
