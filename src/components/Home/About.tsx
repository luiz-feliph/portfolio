import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../Reveal";
import SkillBar from "./SkillBar";
import decoration from "../../assets/icons/decoration.svg";

function About() {
  const { t } = useTranslation();
  const barsRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState<boolean>(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const element = barsRef.current;
    if (!element || barsVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBarsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [barsVisible]);

  return (
    <div
      className="relative flex flex-col items-center bg-deep-teal px-[20px] sm:flex-row sm:px-[40px] sm:gap-[32px] sm:justify-between lg:px-[60px]"
      id="about"
    >
      <img
        className="absolute right-[20px] top-[-60px] w-[120px] md:w-[150px] md:top-auto md:bottom-[-75px] 2xl:right-[64px]"
        src={decoration}
        alt=""
        aria-hidden="true"
      />

      <Reveal className="flex-1 text-off-white mt-[64px] mb-[48px] sm:my-[100px] xl:my-[148px] 2xl:my-[200px]">
        <h2 className="cursor-default font-dm-sans text-[60px] font-bold mb-[32px] sm:text-[80px] sm:mb-[48px] lg:text-[100px] lg:mb-[64px] 2xl:text-[120px]">
          {t("About")}
        </h2>
        <p
          className="font-bitter text-[14px] font-semibold text-justify hyphens-auto sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]"
        >
          {t("AboutText")}
        </p>
      </Reveal>

      <Reveal delay={100} className="cursor-default flex-1 flex w-full justify-center">
        <div
          ref={barsRef}
          className="relative min-w-[200px] h-[350px] mb-[64px] sm:mb-0 sm:h-[400px] xl:min-w-[250px] xl:h-[500px]"
        >
          <SkillBar
            label={t("Back-end")}
            percent={70}
            visible={barsVisible}
            animation="skill-bar-back"
            position="top"
            className="text-steel-blue bg-light-sage"
          />
          <SkillBar
            label={t("Front-end")}
            percent={30}
            visible={barsVisible}
            animation="skill-bar-front"
            position="bottom"
            reverse
            className="text-off-white bg-muted-teal"
          />
        </div>
      </Reveal>
    </div>
  );
}

export default About;
