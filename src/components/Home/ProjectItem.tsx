import type { Image } from "../../types/ImageType";
import { ArrowUpRight } from "lucide-react";

type ProjectItemProps = {
  index: string;
  title: string;
  year: number;
  image: string;
  technologies: Image[];
  link: string;
};

function ProjectItem({
  index,
  title,
  year,
  image,
  technologies,
  link,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col w-full h-full custom-md:min-w-[640px]">
      <div className="flex items-center gap-[12px]">
        <h1 className="font-dm-mono text-[64px] text-transparent outlined-text cursor-default xs:text-[96px] lg:text-[132px]">
          {index}
        </h1>
        <div className="flex flex-col items-center ">
          <h2
            className="font-bitter text-[22px] hyphens-auto font-semibold text-steel-blue xs:text-[32px] lg:text-[48px]"
            lang="en"
          >
            {title}
          </h2>
          <div className="flex justify-start items-center w-full gap-[12px]">
            <div className="border-2 px-[12px] rounded-full border-steel-blue cursor-default">
              <p className="font-dm-mono font-medium text-steel-blue xs:text-[20px] lg:text-[24px]">
                {year}
              </p>
            </div>
            <a
              className="text-off-white bg-deep-teal p-[4px] rounded-full xs:p-[8px] lg- hover:bg-steel-blue duration-300"
              href={link}
              target="_blank"
            >
              <ArrowUpRight className="lg:w-[30px] lg:h-[30px]" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="group w-full h-full bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="
            flex justify-center items-center
            bg-steel-blue w-full h-full rounded-lg gap-[12px]

            custom-md:gap-[32px]
            custom-md:opacity-0 custom-md:pointer-events-none
            custom-md:group-hover:opacity-100 custom-md:group-hover:pointer-events-auto

            transition-opacity duration-300 ease-in-out
          "
        >
          {technologies.map((item, index) => {
            return (
              <img
                className="w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] custom-md:w-[80px] custom-md:h-[80px] "
                src={item.path}
                alt={item.path}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
