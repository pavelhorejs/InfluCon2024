interface SmallBlockProps {
  time: string;
  topic: string;
  divider?: string;
  bg?: string;
}

export default function SmallBlock({
  time,
  topic,
  bg = "bg-[#22FFAF]",
}: SmallBlockProps) {
  return (
    <div
      className={`flex w-full gap-x-[16px] px-[16px] py-[12px] text-black md:flex-row md:px-[40px] md:py-[24px] ${bg}`}
    >
      <p className="text-[16px] font-bold md:text-[24px]">{time}</p>
      <p className="hidden text-[24px] md:block">|</p>
      <p className="text-[16px] md:text-[24px]">{topic}</p>
    </div>
  );
}
