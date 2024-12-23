import { createContext, useRef, useState } from "react";

export const ModalContext = createContext({
  homeRef: null,
  aboutRef: null,
  skillsRef: null,
  projectsRef: null,
  modalOpen: null,
  menuClick: null,
  shouldStick: null,
  handleModal() {},
  closeModal() {},
  handleMenuClick() {},
  handleRefClick() {},
  headerObserver() {},
});

export default function ModalContextProvider({ children }) {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();

  const [modalOpen, setModalOpen] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [shouldStick, setShouldStick] = useState(false);

  function headerObserver(entries) {
    const [entry] = entries;
    setShouldStick(!entry.isIntersecting);
  }

  function handleMenuClick(click) {
    setMenuClick((prevClick) => !prevClick);

    handleModal(click);
  }

  function handleRefClick(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });

    closeModal();
  }

  function handleModal(click) {
    if (click) setModalOpen(true);
    else setModalOpen(false);
  }

  function closeModal() {
    setModalOpen(false);
    setMenuClick(false);
  }

  const modalCtxValue = {
    homeRef,
    aboutRef,
    projectsRef,
    skillsRef,
    modalOpen,
    handleModal,
    closeModal,
    menuClick,
    handleMenuClick,
    handleRefClick,
    headerObserver,
    shouldStick,
  };
  return (
    <ModalContext.Provider value={modalCtxValue}>
      {children}
    </ModalContext.Provider>
  );
}
