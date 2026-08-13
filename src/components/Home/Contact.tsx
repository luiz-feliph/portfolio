import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "../Reveal";
import { site } from "../../config/site";

function Contact() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col items-center bg-off-white px-[20px] py-[64px] sm:px-[40px] sm:py-[100px] lg:px-[60px] xl:pb-[148px] 2xl:pb-[200px]"
      id="contact"
    >
      <Reveal>
        <h2 className="mb-[32px] font-dm-sans text-[60px] font-bold text-deep-teal cursor-default sm:mb-[48px] sm:text-[80px] lg:mb-[64px] lg:text-[100px] 2xl:text-[120px]">
          {t("CTA")}
        </h2>
        <p className="font-bitter text-[14px] font-semibold text-deep-teal text-justify hyphens-auto mb-[32px] sm:text-[18px] md:mb-[48px] lg:mb-[64px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px]">
          {t("CTAText")}
        </p>
      </Reveal>
      <Reveal delay={100}>
        <a
          href={`mailto:${site.email}`}
          className="
            inline-flex items-center gap-[8px] bg-deep-teal font-dm-sans
            text-[18px] font-bold text-off-white px-[18px] py-[8px] rounded-full
            sm:px-[24px] sm:text-[22px] md:px-[28px] md:text-[24px]
            lg:px-[32px] lg:text-[28px]
            hover:bg-steel-blue
            transition-colors duration-300
            hover:-translate-y-0.5 active:translate-y-0
          "
        >
          <Mail className="lg:w-[30px] lg:h-[30px]" aria-hidden="true" />
          {t("CTAButton")}
        </a>
      </Reveal>
    </div>
  );
}

export default Contact;
