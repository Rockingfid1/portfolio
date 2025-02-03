import { createContext, useRef, useState } from "react";

export const ModalContext = createContext({
  homeRef: null,
  aboutRef: null,
  skillsRef: null,
  projectsRef: null,
  menuClick: false,
  shouldStick: false,
  handleMenuClick() {},
  handleRefClick() {},
  headerObserver() {},
});

export default function ModalContextProvider({ children }) {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();

  const [menuClick, setMenuClick] = useState(false);
  const [shouldStick, setShouldStick] = useState(false);

  function headerObserver(entries) {
    const [entry] = entries;
    setShouldStick(!entry.isIntersecting);
  }

  function handleMenuClick() {
    setMenuClick((prevClick) => !prevClick);
  }

  function handleRefClick(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
    handleMenuClick();
  }

  const modalCtxValue = {
    homeRef,
    aboutRef,
    projectsRef,
    skillsRef,
    menuClick,
    shouldStick,
    handleMenuClick,
    handleRefClick,
    headerObserver,
  };
  return (
    <ModalContext.Provider value={modalCtxValue}>
      {children}
    </ModalContext.Provider>
  );
}
