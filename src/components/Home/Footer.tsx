import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleString("en-GB", {
        timeZone: "America/Maceio",
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
    <footer className="flex flex-col gap-[32px] bg-light-sage rounded-t-4xl px-[20px] py-[64px] sm:px-[40px] sm:py-[100px] md:flex-row md:justify-between lg:px-[60px] xl:pb-[148px] 2xl:pb-[200px]">
      <div className="flex-1">
        <h2 className="font-dm-sans text-[24px] font-semibold text-deep-teal sm:text-[26px] lg:text-[32px] xl:text-[36px] 2xl:text-[42px]">
          {t("Contact")}
        </h2>
        <hr className="text-off-white mb-[8px] sm:mb-[12px] xl:mb-[18px]" />
        <ul className="flex flex-col gap-[8px] font-bitter text-steel-blue text-[20px] sm:gap-[12px] sm:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
          <li className="hover:text-sage duration-300">
            <a href="mailto:luizfelipe.code@outlook.com" target="_blank">
              luizfelipe.code@outlook.com
            </a>
          </li>
          <li className="hover:text-sage duration-300">
            <a href="https://wa.me/+5579996641164" target="_blank">
              +55 79 99664-1164
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="font-dm-sans text-[24px] font-semibold text-deep-teal sm:text-[26px] lg:text-[32px] xl:text-[36px] 2xl:text-[42px]">
          {t("SocialMedia")}
        </h2>
        <hr className="text-off-white mb-[8px] sm:mb-[12px] xl:mb-[18px]" />
        <ul className="flex flex-col gap-[8px] font-bitter text-steel-blue text-[20px] sm:gap-[12px] sm:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
          <li className="hover:text-sage duration-300">
            <a href="https://www.linkedin.com/in/luizfelipesm/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li className="hover:text-sage duration-300">
            <a href="https://github.com/luiz-feliph" target="_blank">
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
  );
}

export default Footer;
