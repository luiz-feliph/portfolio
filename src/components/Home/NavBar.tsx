import { useEffect, useState } from "react";
import diagonalArrow from "../../assets/icons/diagonal-arrow.svg";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setIsOpen(false));
  }, []);

  return (
    <>
      <button
        aria-label="Toggle navigation menu"
        onClick={handleMenu}
        className="
          fixed top-[15px] right-4 z-[999]
          flex h-[50px] w-[50px] flex-col items-center justify-center gap-2
          cursor-pointer rounded-full bg-steel-blue
          md:hidden
        "
      >
        <span
          className={`
            h-[2px] w-[30px] rounded-xl bg-white
            transition-transform duration-300
            ${isOpen ? "translate-y-[4px] rotate-45" : ""}
          `}
        />
        <span
          className={`
            h-[2px] w-[30px] rounded-xl bg-white
            transition-transform duration-300
            ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}
          `}
        />
      </button>

      <nav aria-hidden={!isOpen} className="w-full">
        <div
          className={`
            fixed inset-0 z-50
            h-screen w-full
            bg-white/30 backdrop-blur-md
            transition-transform duration-300
            ${isOpen ? "handle-menu" : "translate-x-full"}
            md:static md:h-[80px] md:translate-x-0 md:bg-transparent md:backdrop-blur-none 
          `}
        >
          <span
            className={`
              absolute -right-[80px] -top-[120px]
              h-[300px] w-[300px] rounded-full bg-deep-teal/20
              transition-transform duration-600
              ${isOpen ? "" : "scale-[0.1]"}
              md:hidden
            `}
          />
          <span
            className={`
              absolute -right-[120px] -top-[90px]
              h-[300px] w-[300px] rounded-full bg-deep-teal/20
              transition-transform duration-800
              ${isOpen ? "" : "scale-[0.1]"}
              md:hidden
            `}
          />

          <div
            className="
              flex h-screen flex-col items-center justify-end
              gap-[100px] py-[40px]
              md:h-[80px] md:flex-row md:justify-between md:py-0 
            "
          >
            <ul
              className="
                flex flex-col gap-2 text-4xl font-dm-sans font-black uppercase text-deep-teal my-auto
                md:flex-row md:gap-4 md:text-xl md:font-bitter md:font-bold md:normal-case md:text-steel-blue
                lg:gap-8
                xl:gap-12
              "
            >
              <li>
                <a 
                  className="
                    block p-2
                    md:transition md:hover:-translate-y-1 md:duration-300
                  " 
                  href="#about" 
                  onClick={handleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="
                    block p-2
                    md:transition md:hover:-translate-y-1 md:duration-300
                  "
                  href="#experience"
                  onClick={handleMenu}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  className="
                    block p-2
                    md:transition md:hover:-translate-y-1 md:duration-300
                  " 
                  href="#education" 
                  onClick={handleMenu}
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  className="
                    block p-2
                    md:transition md:hover:-translate-y-1 md:duration-300
                  " 
                  href="#contact" 
                  onClick={handleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>

            <address className="flex flex-col gap-6 not-italic md:hidden">
              <div>
                <h3 className="font-dm-sans font-bold text-steel-blue">
                  EMAIL ADDRESS
                </h3>
                <p className="font-dm-sans font-bold text-deep-teal">
                  luizfelipe01.2007@gmail.com
                </p>
              </div>

              <ul className="flex justify-between font-bitter font-bold text-deep-teal">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/luizfelipesm/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/luiz-feliph"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://leetcode.com/u/luiz-feliph/"
                  >
                    Leetcode
                  </a>
                </li>
              </ul>
            </address>

            <a
              href="/documents/luiz-felipe-resume.pdf"
              download="luiz-felipe-resume.pdf"
              aria-label="Download resume"
              className="
              max-md:hidden group relative flex items-center gap-2 h-[40px] w-[40px] cursor-pointer bg-steel-blue rounded-full transition-all duration-300 hover:w-[140px]
              "
            >
              <p 
                className="
                  absolute right-[40px] text-xl text-off-white font-bold opacity-0 group-hover:opacity-100 transition-opacity
                "
                >
                Resume
              </p>
              <img
                src={diagonalArrow}
                alt="Download arrow icon"
                className="absolute right-[8px]"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
