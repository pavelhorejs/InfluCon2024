interface SmallBlockProps {
  time: string;
  topic: string;
}

export default function SmallBlock({ time, topic }: SmallBlockProps) {
  return (
    <div className="flex w-full gap-x-[16px] bg-[#22FFAF] px-[16px] py-[12px] text-black md:flex-row md:px-[40px] md:py-[24px]">
      <p className="text-[16px] font-bold md:text-[24px]">{time}</p>
      <p className="hidden text-[24px] md:block">|</p>
      <p className="text-[16px] md:text-[24px]">{topic}</p>
    </div>
  );
}
