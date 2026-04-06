import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Education from "../components/Home/Education";
import Experience from "../components/Home/Experience";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";

function Home() {
  return (
    <div className="bg-off-white">
      <Header />
      <Main />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
