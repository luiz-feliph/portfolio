import { useTranslation } from "react-i18next";

type EducationCardProps = {
  period: string;
  degree: string;
  course: string;
  api: string;
  institute: string;
};

function EducationCard({
  period,
  degree,
  course,
  api,
  institute,
}: EducationCardProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center w-full h-[169px] min-h-full p-[20px] rounded-lg bg-off-white hover:-translate-y-1 duration-300 sm:justify-between sm:h-auto md:gap-[20px]">
      <p className="hidden font-dm-sans text-[24px] font-semibold text-steel-blue md:block lg:text-[28px]">
        {period}
      </p>

      <div>
        <p className="font-dm-sans text-[20px] font-semibold text-steel-blue sm:text-[24px] lg:text-[28px]">
          {degree}
        </p>

        <h3 className="mb-[6px] font-bitter text-[24px] font-bold text-deep-teal sm:text-[30px] lg:text-[36px]">
          {course}
        </h3>

        <p className="hidden font-dm-sans text-[14px] font-semibold text-steel-blue sm:text-[16px] lg:text-[20px]">
          {t("API")}:{" "}
          <span className="font-dm-mono">{api}</span>
        </p>
      </div>

      <p className="font-dm-sans text-[24px] font-bold text-steel-blue lg:text-[28px]">
        {institute}
      </p>
    </div>
  );
}

export default EducationCard;
