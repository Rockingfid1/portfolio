import { useEffect, useState } from "react";
import ModalContextProvider from "./store/modal-context";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (document.readyState === "complete") {
        setLoading(false);
        console.log("ready");
      } else {
        window.addEventListener("load", () => {
          setLoading(false);
        });
      }
    }, 1000);
  }, []);

  return (
    <ModalContextProvider>
      {loading && <LoadingPage />}
      {!loading && (
        <>
          <SectionOne />
          <SectionThree />
          <SectionTwo />
          <Footer />
        </>
      )}
    </ModalContextProvider>
  );
}

export default App;
