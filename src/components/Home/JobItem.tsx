import type { JobItemData } from "../../types/JobItemData";

function JobItem({
  period,
  organization,
  role,
  responsibilities,
}: JobItemData) {
  return (
    <li className="mb-[32px] sm:mb-[48px] md:mb-[64px] list-none">
      <div className="flex items-center gap-[10px] md:gap-[18px]">
        <span
          aria-hidden="true"
          className="bg-off-white min-w-[20px] h-[20px] rounded-full lg:min-w-[30px] lg:h-[30px]"
        />
        <p className="font-dm-sans font-bold text-[20px] text-steel-blue sm:text-[24px] lg:text-[28px]">
          {period}
        </p>
      </div>
      <div className="ml-[30px] md:ml-[38px] lg:ml-[48px]">
        <h3 className="font-bitter font-bold text-[24px] text-deep-teal sm:text-[28px] lg:text-[36px]">
          {role}
        </h3>
        <p className="font-dm-sans font-bold text-[20px] text-steel-blue sm:text-[24px] lg:text-[28px] lg:mb-[12px]">
          {organization}
        </p>
        <ul className="hidden list-disc list-inside font-dm-sans text-steel-blue font-semibold hyphens-auto lg:block lg:pr-[12px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">
          {responsibilities.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </li>
  );
}

export default JobItem;
