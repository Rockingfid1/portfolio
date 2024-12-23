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
        className="m-auto flex flex-col-reverse gap-3 2xl:flex-row lg:flex-col-reverse lg:p-20 md:gap-5 md:flex-col-reverse sm:flex-col-reverse sm:gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [1, 4, 1] }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-white text-center m-auto flex flex-col gap-5 items-start xl:gap-8 p-4">
          <span>
            <h1 className="font-semibold text-2xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl mb-1 flex flex-row gap-2">
              Frontend <p className="text-green-500">Developer</p>
            </h1>
            <p className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg flex flex-row gap-3">
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
            className="bg-green-500 rounded-lg max-w-fit py-3 px-5 xl:text-5xl xl:pb-5 lg:pb-5 lg:text-4xl md:pb-5 md:text-3xl sm:pb-4 sm:text-2xl text-lg text-white items-center"
            onClick={handleAboutClick}
          >
            About Me
          </motion.button>
        </div>
        <img src={devImage} alt="developer" className="m-auto w-[60%]" />
      </motion.div>
    </section>
  );
}
