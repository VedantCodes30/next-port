import About from "./component/About";

import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import LenisWrapper from "./component/LenisWrapper";
import Skills from "./component/Skills";

export default function Page() {
  return (
    <LenisWrapper>
      <Header />
      <Home />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </LenisWrapper>
  );
}
