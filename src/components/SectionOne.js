import Header from "./Header";
import { AnimatePresence, motion } from "motion/react";
import devImage from "../assets/images/web-developer.png";
import { useContext, useEffect } from "react";
import { ModalContext } from "../store/modal-context";
import MenuModal from "./MenuModal";

export default function SectionOne() {
  const modalCtx = useContext(ModalContext);

  function handleAboutClick() {
    modalCtx.aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      modalCtx.headerObserver,
      {
        root: null,
        threshold: 0.13,
      }
    );

    intersectionObserver.observe(modalCtx.homeRef.current);
  }, [modalCtx]);

  return (
    <section
      ref={modalCtx.homeRef}
      className="page-color w-screen min-h-screen flex flex-col"
    >
      <Header />
      <AnimatePresence>
        {modalCtx.modalOpen && <MenuModal modalOpen={modalCtx.modalOpen} />}
      </AnimatePresence>
      <motion.div
        className="m-auto flex flex-row p-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [1, 4, 1] }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-white text-center m-auto flex flex-col gap-5 items-start ">
          <span>
            <h1 className="font-semibold text-7xl mb-3 flex flex-row gap-3">
              Frontend <p className="text-green-500">Developer</p>
            </h1>
            <p className="text-4xl flex flex-row gap-3">
              Resilient
              <span className=" text-green-500">.</span>
              Determined
              <span className=" text-green-500">.</span>
              Efficient
            </p>
          </span>
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, stiffness: 500, type: "spring" }}
            className="bg-green-500 rounded-lg max-w-fit text-2xl py-3 px-5 text-white items-center"
            onClick={handleAboutClick}
          >
            About Me
          </motion.button>
        </div>
        <img src={devImage} alt="developer" className="w-[30%] m-auto" />
      </motion.div>
    </section>
  );
}
