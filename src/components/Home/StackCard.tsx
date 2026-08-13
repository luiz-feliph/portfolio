import type { StackCardData } from "../../types/StackCardData";
import type { Image } from "../../types/ImageType";

type StackCardProps = {
  data: StackCardData;
  colorIndex: number;
};

type CardStyle = {
  card: string;
  title: string;
};

const cardStyles: CardStyle[] = [
  { card: "bg-off-white", title: "text-steel-blue" },
  { card: "bg-muted-teal", title: "text-off-white" },
  { card: "bg-steel-blue", title: "text-off-white" },
];

function StackCard({ data, colorIndex }: StackCardProps) {
  const style = cardStyles[colorIndex] ?? cardStyles[0];

  return (
    <div
      className={`flex flex-col items-center ${style.card} rounded-lg p-[8px] cursor-default sm:p-[16px] lg:w-full lg:p-[24px]`}
    >
      <h3
        className={`font-bitter font-bold ${style.title} text-[28px] mb-[6px] sm:text-[34px] sm:mb-[12px] xl:text-[38px] 2xl:text-[42px]`}
      >
        {data.title}
      </h3>
      <div className="flex justify-center gap-[18px]">
        {data.images.map((item: Image, index) => (
          <img
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px]"
            src={item.path}
            alt={item.alt}
            key={index}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}

export default StackCard;
