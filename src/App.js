import ModalContextProvider from "./store/modal-context";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Footer from "./components/Footer";

function App() {
  return (
    <ModalContextProvider>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </ModalContextProvider>
  );
}

export default App;
