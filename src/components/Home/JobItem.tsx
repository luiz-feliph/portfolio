import type { JobItemData } from "../../types/JobItemData";

function JobItem({
  period,
  organization,
  role,
  responsibilities,
}: JobItemData) {
  return (
    <div className="mb-[32px] sm:mb-[48px] md:mb-[64px]">
      <div className="flex items-center gap-[10px] md:gap-[18px]">
        <span className="bg-off-white min-w-[20px] h-[20px] rounded-full lg:min-w-[30px] lg:h-[30px]"></span>
        <h3 className="font-dm-sans font-bold text-[20px] text-steel-blue sm:text-[24px] lg:text-[28px]">
          {period}
        </h3>
      </div>
      <div className="ml-[30px] md:ml-[38px] lg:ml-[48px]">
        <h2 className="font-bitter font-bold text-[24px] text-deep-teal sm:text-[28px] lg:text-[36px]">
          {role}
        </h2>
        <h3 className="font-dm-sans font-bold text-[20px] text-steel-blue sm:text-[24px] lg:text-[28px] lg:mb-[12px]">
          {organization}
        </h3>
        <ul className="hidden list-disc list-inside font-dm-sans text-steel-blue font-semibold hyphens-auto lg:block lg:pr-[12px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">
          {responsibilities.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default JobItem;
