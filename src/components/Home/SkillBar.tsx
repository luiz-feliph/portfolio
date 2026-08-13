type SkillBarProps = {
  label: string;
  percent: number;
  visible: boolean;
  animation: string;
  position: "top" | "bottom";
  className: string;
  reverse?: boolean;
};

function SkillBar({
  label,
  percent,
  visible,
  animation,
  position,
  className,
  reverse = false,
}: SkillBarProps) {
  return (
    <div
      className={`
        absolute inset-x-0 flex h-0 flex-col items-center justify-between
        overflow-hidden p-[10px] text-[24px] font-bold xl:text-[28px]
        ${position === "top" ? "top-0 rounded-t-xl" : "bottom-0 rounded-b-xl"}
        ${className}
      `}
      style={{
        animation: visible ? `${animation} 1.6s ease-in-out forwards` : "none",
      }}
    >
      {reverse ? (
        <>
          <p className="font-dm-mono">{percent}%</p>
          <h3 className="font-bitter">{label}</h3>
        </>
      ) : (
        <>
          <h3 className="font-bitter">{label}</h3>
          <p className="font-dm-mono">{percent}%</p>
        </>
      )}
    </div>
  );
}

export default SkillBar;
