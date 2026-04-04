import type { colorConfiguration, StackCardData } from "../../types/StackCardData";
import type { Image } from "../../types/ImageType";


type StackCardProps = {
  data: StackCardData;
  colorIndex: number;
};

function StackCard({ data, colorIndex }: StackCardProps) {
  const colors: colorConfiguration[] = [
    { primaryColor: "steel-blue", secondaryColor: "off-white" },
    { primaryColor: "off-white", secondaryColor: "muted-teal" },
    { primaryColor: "off-white", secondaryColor: "steel-blue" },
  ];

  return (
    <div
      className={`flex flex-col items-center bg-${colors[colorIndex].secondaryColor} rounded-lg p-[8px] sm:p-[16px] lg:w-full lg:p-[24px]`}
    >
      <h1
        className={`font-bitter font-bold text-${colors[colorIndex].primaryColor} text-[28px] mb-[6px] sm:text-[34px] sm:mb-[12px] xl:text-[38px] 2xl:text-[42px]`}
      >
        {data.title}
      </h1>
      <div className="flex justify-center gap-[18px]">
        {data.images.map((item: Image, index) => (
          <img className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px]" src={item.path} alt={item.alt} key={index} />
        ))}
      </div>
    </div>
  );
}

export default StackCard;
