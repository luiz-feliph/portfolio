import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import diagonalArrow from "../../assets/icons/diagonal-arrow.svg";
import { site } from "../../config/site";

function NavBar() {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767.98px)").matches
      : false,
  );

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const currentLanguage = i18n.language.startsWith("pt") ? "pt" : "en";

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLanguage === "pt" ? "en" : "pt");
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767.98px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      if (isMobile) firstLinkRef.current?.focus();
    } else if (isMobile) {
      menuButtonRef.current?.focus();
    }
  }, [isOpen, isMobile]);

  const menuInert = !isOpen && isMobile;

  return (
    <>
      <button
        ref={menuButtonRef}
        aria-label={t("ToggleMenu")}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={toggleMenu}
        className="
          fixed top-[15px] right-4 z-[999]
          flex h-[50px] w-[50px] flex-col items-center justify-center gap-2
          cursor-pointer rounded-full bg-steel-blue transition-transform duration-300
          hover:bg-muted-teal
          active:scale-95
          md:hidden
        "
      >
        <span
          aria-hidden="true"
          className={`
            h-[2px] w-[30px] rounded-xl bg-white
            transition-transform duration-300
            ${isOpen ? "translate-y-[4px] rotate-45" : ""}
          `}
        />
        <span
          aria-hidden="true"
          className={`
            h-[2px] w-[30px] rounded-xl bg-white
            transition-transform duration-300
            ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}
          `}
        />
      </button>

      <nav aria-label={t("MainNavigation")} className="w-full">
        <div
          id="mobile-menu"
          inert={menuInert}
          aria-hidden={menuInert}
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
            aria-hidden="true"
            className={`
              absolute -right-[80px] -top-[120px]
              h-[300px] w-[300px] rounded-full bg-deep-teal/20
              transition-transform duration-700
              ${isOpen ? "" : "scale-[0.1]"}
              md:hidden
            `}
          />
          <span
            aria-hidden="true"
            className={`
              absolute -right-[120px] -top-[90px]
              h-[300px] w-[300px] rounded-full bg-deep-teal/20
              transition-transform duration-700
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
                  ref={firstLinkRef}
                  className="nav-link block p-2 md:transition md:hover:-translate-y-1 md:duration-300"
                  href="#about"
                  onClick={closeMenu}
                >
                  {t("About")}
                </a>
              </li>
              <li>
                <a
                  className="nav-link block p-2 md:transition md:hover:-translate-y-1 md:duration-300"
                  href="#experience"
                  onClick={closeMenu}
                >
                  {t("Experience")}
                </a>
              </li>
              <li>
                <a
                  className="nav-link block p-2 md:transition md:hover:-translate-y-1 md:duration-300"
                  href="#education"
                  onClick={closeMenu}
                >
                  {t("Education")}
                </a>
              </li>
              <li>
                <a
                  className="nav-link block p-2 md:transition md:hover:-translate-y-1 md:duration-300"
                  href="#contact"
                  onClick={closeMenu}
                >
                  {t("Contact")}
                </a>
              </li>
            </ul>

            <address className="flex flex-col gap-6 not-italic md:hidden">
              <div>
                <h3 className="font-dm-sans font-bold text-steel-blue">
                  {t("EMAIL ADDRESS")}
                </h3>
                <p className="font-dm-sans font-bold text-deep-teal">
                  {site.email}
                </p>
              </div>

              <ul className="flex justify-between font-bitter font-bold text-deep-teal">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={site.linkedin}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={site.github}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={site.leetcode}
                  >
                    LeetCode
                  </a>
                </li>
              </ul>

              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={t("SwitchLanguage")}
                className="
                  relative mx-auto flex h-[40px] w-[96px] cursor-pointer items-center
                  rounded-full border-2 border-deep-teal bg-white/10 p-1
                  transition-transform duration-200 ease-out active:scale-[0.96]
                "
              >
                <span
                  aria-hidden="true"
                  className={`
                    absolute bottom-1 left-1 top-1 w-[42px] rounded-full bg-deep-teal
                    transition-transform duration-300
                    ${currentLanguage === "pt" ? "" : "translate-x-[42px]"}
                  `}
                />
                <span
                  className={`
                    relative z-10 flex-1 text-center font-dm-sans font-bold
                    transition-colors duration-300
                    ${currentLanguage === "pt" ? "text-off-white" : "text-deep-teal"}
                  `}
                >
                  PT
                </span>
                <span
                  className={`
                    relative z-10 flex-1 text-center font-dm-sans font-bold
                    transition-colors duration-300
                    ${currentLanguage === "pt" ? "text-deep-teal" : "text-off-white"}
                  `}
                >
                  EN
                </span>
              </button>
            </address>

            <div className="hidden items-center gap-4 md:flex">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={t("SwitchLanguage")}
                className="
                  relative flex h-[40px] w-[88px] cursor-pointer items-center
                  rounded-full border-2 border-steel-blue bg-white/10 p-[3px]
                  transition-transform duration-200 ease-out active:scale-[0.96]
                "
              >
                <span
                  aria-hidden="true"
                  className={`
                    absolute bottom-[3px] left-[3px] top-[3px] w-[39px] rounded-full bg-steel-blue
                    transition-transform duration-300
                    ${currentLanguage === "pt" ? "" : "translate-x-[39px]"}
                  `}
                />
                <span
                  className={`
                    relative z-10 flex-1 text-center font-dm-mono text-sm font-bold
                    transition-colors duration-300
                    ${currentLanguage === "pt" ? "text-off-white" : "text-steel-blue"}
                  `}
                >
                  PT
                </span>
                <span
                  className={`
                    relative z-10 flex-1 text-center font-dm-mono text-sm font-bold
                    transition-colors duration-300
                    ${currentLanguage === "pt" ? "text-steel-blue" : "text-off-white"}
                  `}
                >
                  EN
                </span>
              </button>

              <a
                href={`/resume/${t("resumeURL")}.pdf`}
                download={t("resumeURL")}
                aria-label={t("DownloadResume")}
                className="
                  group relative flex h-[40px] w-[40px] cursor-pointer items-center gap-2
                  rounded-full bg-steel-blue transition-all duration-300
                  hover:w-[140px] hover:bg-deep-teal
                "
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[36px] text-xl font-bold text-off-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {t("Resume")}
                </span>
                <img
                  src={diagonalArrow}
                  alt=""
                  aria-hidden="true"
                  className="absolute right-[8px]"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
