import { useTranslation } from "react-i18next";
import Reveal from "../Reveal";
import Jobs from "./Jobs";
import Projects from "./Projects";
import Stack from "./Stack";

function Experience() {
  const { t } = useTranslation();

  return (
    <div
      className="bg-light-sage px-[20px] py-[64px] sm:px-[40px] sm:py-[100px] xl:pb-[120px]"
      id="experience"
    >
      <Reveal>
        <h2 className="cursor-default font-dm-sans text-deep-teal text-[50px] font-bold mb-[32px] sm:text-[80px] sm:mb-[48px] lg:text-[100px] lg:mb-[64px] 2xl:text-[120px]">
          {t("Experience")}
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <Jobs />
      </Reveal>
      <Reveal delay={100}>
        <Stack />
      </Reveal>
      <Reveal delay={100}>
        <Projects />
      </Reveal>
    </div>
  );
}

export default Experience;
