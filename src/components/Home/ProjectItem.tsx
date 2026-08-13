import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import type { Image } from "../../types/ImageType";

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
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full h-full custom-md:min-w-[640px]">
      <div className="flex items-center gap-[12px]">
        <span
          aria-hidden="true"
          className="font-dm-mono text-[64px] text-transparent outlined-text cursor-default xs:text-[96px] lg:text-[132px]"
        >
          {index}
        </span>
        <div className="flex flex-col items-center ">
          <h3
            className="font-bitter text-[22px] hyphens-auto font-semibold text-steel-blue xs:text-[32px] lg:text-[48px]"
            lang="en"
          >
            {title}
          </h3>
          <div className="flex justify-start items-center w-full gap-[12px]">
            <div className="border-2 px-[12px] rounded-full border-steel-blue cursor-default">
              <p className="font-dm-mono font-medium text-steel-blue xs:text-[20px] lg:text-[24px]">
                {year}
              </p>
            </div>
            <a
              aria-label={`${t("OpenProject")}: ${title}`}
              className="
                text-off-white bg-deep-teal p-[4px] rounded-full
                xs:p-[8px] hover:bg-steel-blue
                transition-colors duration-300
              "
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight className="lg:w-[30px] lg:h-[30px]" />
            </a>
          </div>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t("OpenProject")}: ${title}`}
        className="group relative block w-full h-full overflow-hidden rounded-lg"
      >
        <img
          src={image}
          alt={`${title} - ${t("ProjectScreenshot")}`}
          loading="lazy"
          decoding="async"
          className="
            h-full w-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-105
          "
        />
        <div
          className="
            flex justify-center items-center
            bg-steel-blue w-full h-full absolute inset-0 rounded-lg gap-[12px]

            custom-md:gap-[32px]
            custom-md:opacity-0
            custom-md:group-hover:opacity-100
            custom-md:group-focus-within:opacity-100

            transition-opacity duration-300 ease-in-out
          "
        >
          {technologies.map((item, key) => {
            return (
              <img
                className="w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] custom-md:w-[80px] custom-md:h-[80px]"
                src={item.path}
                alt={item.alt}
                key={key}
              />
            );
          })}
        </div>
      </a>
    </div>
  );
}

export default ProjectItem;
