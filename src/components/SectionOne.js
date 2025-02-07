import Header from "./Header";
import { motion } from "motion/react";
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
    <>
      {modalCtx.menuClick && <MenuModal modalOpen={modalCtx.menuClick} />}
      <section
        ref={modalCtx.homeRef}
        className="page-color w-screen min-h-screen flex flex-col border-b-8  border-opacity-75 border-gray-600"
      >
        <Header />

        <motion.div
          className="m-auto flex flex-col gap-3 2xl:flex-row lg:flex-col-reverse lg:p-20 md:gap-5 md:flex-col-reverse sm:flex-col-reverse sm:gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [1, 4, 1] }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={devImage}
            alt="developer"
            className="m-auto w-[50%] lp:w-[35%]"
          />
          <div className="text-white text-center m-auto flex flex-col gap-5 items-start lg:gap-10 lp:gap-8 xl:gap-12 p-4">
            <span>
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl  mb-1 sm:mb-2 md:mb-3 lg:mb-4 flex flex-row gap-2">
                Frontend <p className="text-green-500">Developer</p>
              </h1>
              <p className=" text-lg md:text-2xl flex flex-row gap-3">
                Resilient
                <span className=" text-green-500">.</span>
                Determined
                <span className=" text-green-500">.</span>
                Efficient
              </p>
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, stiffness: 500, type: "spring" }}
              className="bg-green-500 rounded-lg max-w-fit py-3 px-5 text-xl md:text-3xl xl:pb-5 lp:py-3 lg:pb-5 md:pb-3 sm:pb-4 2md:pb-4 text-white items-center"
              onClick={handleAboutClick}
            >
              About Me
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
