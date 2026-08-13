import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../Reveal";
import { site } from "../../config/site";

function Footer() {
  const { t } = useTranslation();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleString("en-GB", {
        timeZone: site.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setTime(now);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Reveal>
      <footer className="flex flex-col gap-[32px] bg-light-sage rounded-t-4xl px-[20px] py-[64px] sm:px-[40px] sm:py-[100px] md:flex-row md:justify-between lg:px-[60px] xl:pb-[148px] 2xl:pb-[200px]">
        <div className="flex-1">
          <h2 className="font-dm-sans text-[24px] font-semibold text-deep-teal sm:text-[26px] lg:text-[32px] xl:text-[36px] 2xl:text-[42px]">
            {t("Contact")}
          </h2>
          <hr className="border-off-white mb-[8px] sm:mb-[12px] xl:mb-[18px]" />
          <ul className="flex flex-col gap-[8px] font-bitter text-steel-blue text-[20px] sm:gap-[12px] sm:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
            <li className="hover:text-sage transition-colors duration-300">
              <a href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="hover:text-sage transition-colors duration-300">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-dm-sans text-[24px] font-semibold text-deep-teal sm:text-[26px] lg:text-[32px] xl:text-[36px] 2xl:text-[42px]">
            {t("SocialMedia")}
          </h2>
          <hr className="border-off-white mb-[8px] sm:mb-[12px] xl:mb-[18px]" />
          <ul className="flex flex-col gap-[8px] font-bitter text-steel-blue text-[20px] sm:gap-[12px] sm:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
            <li className="hover:text-sage transition-colors duration-300">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="hover:text-sage transition-colors duration-300">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 md:flex md:flex-col md:items-center">
          <h2 className="font-dm-sans text-[22px] font-semibold text-deep-teal mb-[8px] sm:mb-[12px] sm:text-[26px] lg:text-[32px] xl:mb-[14px] xl:text-[36px] 2xl:text-[42px]">
            {t("LocalTime")}
          </h2>
          <p className="font-bitter text-[22px] text-steel-blue sm:text-[26px] lg:text-[32px] xl:text-[36px]">
            {time}
          </p>
        </div>
      </footer>
    </Reveal>
  );
}

export default Footer;
