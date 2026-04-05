import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Education from "../components/Home/Education";
import Experience from "../components/Home/Experience";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default Home;
