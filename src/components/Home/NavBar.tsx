import { useEffect, useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setIsOpen(false), false);
  }, []);

  return (
    <>
      <button
        aria-label="Toggle navigation menu"
        onClick={handleMenu}
        className="
          fixed top-9 right-8 z-[999]
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

      <nav aria-hidden={!isOpen}>
        <div
          className={`
            fixed inset-0 z-50
            h-screen w-screen
            bg-white/30 backdrop-blur-xs
            transition-transform duration-300
            ${isOpen ? "handle-menu" : "translate-x-full"}
          `}
        >
          <span
            className={`
              absolute -right-[80px] -top-[120px]
              h-[300px] w-[300px] rounded-full bg-deep-teal/20
              transition-transform duration-600
              ${isOpen ? "" : "scale-[0.1]"}
            `}
          />
          <span
            className={`
              absolute -right-[120px] -top-[90px]
              h-[300px] w-[300px] rounded-full bg-deep-teal/20
              transition-transform duration-800
              ${isOpen ? "" : "scale-[0.1]"}
            `}
          />

          <div
            className="
              flex h-screen flex-col items-center justify-end
              gap-[100px] py-[40px]
            "
          >
            <ul className="flex flex-col gap-2 text-4xl font-bold uppercase text-deep-teal">
              <li>
                <a className="block p-2" href="#about" onClick={handleMenu}>
                  About
                </a>
              </li>
              <li>
                <a
                  className="block p-2"
                  href="#experience"
                  onClick={handleMenu}
                >
                  Experience
                </a>
              </li>
              <li>
                <a className="block p-2" href="#education" onClick={handleMenu}>
                  Education
                </a>
              </li>
              <li>
                <a className="block p-2" href="#contact" onClick={handleMenu}>
                  Contact
                </a>
              </li>
            </ul>

            <address className="flex flex-col gap-6 not-italic">
              <div>
                <h3 className="font-dm-sans font-bold text-steel-blue">
                  EMAIL ADDRESS
                </h3>
                <p className="font-dm-sans font-bold text-deep-teal">
                  luizfelipe01.2007@gmail.com
                </p>
              </div>

              <ul className="flex gap-3 font-bitter font-bold text-deep-teal">
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
