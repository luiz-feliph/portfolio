import { ChevronUp, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectJson from "../../data/projects.json";

function Projects() {
  const [index, setIndex] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToNextSlide = () => {
    if (!sliderRef.current) return;

    const sliderElement = sliderRef.current;
    const slides = sliderElement.children;

    const nextIndex = index - 1 < 0 ? slides.length - 1 : index - 1;

    slides[nextIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setIndex(nextIndex);
  };

  const slidePrev = () => {
    if (!sliderRef.current) return;

    const sliderElement = sliderRef.current;
    const slides = sliderElement.children;

    const nextIndex = index + 1 >= slides.length ? 0 : index + 1;

    slides[nextIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setIndex(nextIndex);
  };

  return (
    <div className="xl:px-[40px] 2xl:px-[80px] 3xl:px-[160px]">
      <h2 className="text-center font-bitter font-bold text-[32px] text-deep-teal mb-[16px] sm:text-[48px] lg:text-[64px]">
        Projects
      </h2>
      <div className="flex flex-col items-center bg-off-white h-[250px] rounded-lg px-[8px] xs:h-[300px] sm:h-[400px] custom:h-[544px] custom:flex-row custom:px-0 custom:py-[20px] lg:h-[598px]">
        <button
          className="flex justify-center w-full cursor-pointer custom:w-auto custom:h-full custom:items-center"
          onClick={goToNextSlide}
        >
          <ChevronUp className="w-[30px] h-[30px] text-[#97A69F] hover:text-[#5f6f69] transition-colors sm:w-[40px] sm:h-[40px] custom:-rotate-90 xl:w-[50px] xl:h-[50px]" />
        </button>
        <div
          className="h-full w-full overflow-y-hidden custom:flex custom:overflow-x-hidden custom:gap-[32px]"
          ref={sliderRef}
        >
          {ProjectJson.map((item, index) => {
            return (
              <ProjectItem 
                key={index}
                index={`0${index + 1}`}
                title={item.title}
                year={item.year}
                image={item.image}
                technologies={item.technologies}
                link={item.link}
              />
            )
          })}
        </div>
        <button
          className="flex justify-center w-full cursor-pointer custom:w-auto custom:h-full custom:items-center"
          onClick={slidePrev}
        >
          <ChevronDown className="w-[30px] h-[30px] text-[#97A69F] hover:text-[#5f6f69] transition-colors sm:w-[40px] sm:h-[40px] custom:-rotate-90 xl:w-[50px] xl:h-[50px]" />
        </button>
      </div>
    </div>
  );
}

export default Projects;
