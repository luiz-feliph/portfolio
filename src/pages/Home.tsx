import { Suspense, lazy } from "react";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";

const About = lazy(() => import("../components/Home/About"));
const Experience = lazy(() => import("../components/Home/Experience"));
const Education = lazy(() => import("../components/Home/Education"));
const Contact = lazy(() => import("../components/Home/Contact"));
const Footer = lazy(() => import("../components/Home/Footer"));

function Home() {
  return (
    <div className="bg-off-white">
      <Header />
      <Main />
      <Suspense fallback={null}>
        <About />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
