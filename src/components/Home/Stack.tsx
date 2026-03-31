import StackCard from "./StackCard";
import StackData from "../../data/stack.json";
import type { StackCardData } from "../../types/StackCardData";

function Stack() {
  return (
    <div className="flex flex-col gap-[18px] lg:gap-[12px]">
      <div className="flex flex-col gap-[12px] lg:flex-row lg:justify-between">
        {StackData.map((item: StackCardData, index) => {
          return <StackCard data={item} colorIndex={index} key={index} />;
        })}
      </div>
      <div className="font-bitter font-semibold text-[16px] text-deep-teal text-justify hyphens-auto sm:text-[20px] lg:text-[24px] lg:bg-deep-teal lg:text-off-white lg:rounded-lg lg:px-[32px] lg:py-[48px]">Others: Git/GitHub • Agile • TDD • Testing • Rest APIs • Figma • Data Modeling</div>
    </div>
  );
}

export default Stack;
