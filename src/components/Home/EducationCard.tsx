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
  return (
    <div className="flex flex-col justify-center gap-[20px] w-full h-[169px] min-h-full p-[20px] rounded-lg bg-off-white hover:-translate-y-1 duration-300 sm:justify-between sm:h-auto">
      <h4 className="hidden font-dm-sans text-[24px] font-semibold text-steel-blue md:block lg:text-[28px]">
        {period}
      </h4>

      <div>
        <h4 className="font-dm-sans text-[20px] font-semibold text-steel-blue sm:text-[24px] lg:text-[28px]">
          {degree}
        </h4>

        <h2 className="mb-[6px] font-bitter text-[24px] font-bold text-deep-teal sm:text-[30px] lg:text-[36px]">
          {course}
        </h2>

        <p className="font-dm-sans text-[14px] font-semibold text-sage sm:text-[16px] lg:text-[20px]">
          Academic Performance Index:{" "}
          <span className="font-dm-mono">{api}</span>
        </p>
      </div>

      <h4 className="hidden font-dm-sans text-[24px] font-bold text-steel-blue md:block lg:text-[28px]">
        {institute}
      </h4>
    </div>
  );
}

export default EducationCard;