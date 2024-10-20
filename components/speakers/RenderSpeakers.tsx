import Flipcardwho from "@/components/flip_card/flipwho/Flipcard";

export const RenderSpeakers = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 gap-x-[16px] gap-y-[16px] pb-[32px] md:grid-cols-2 lg:grid-cols-4">
        <Flipcardwho />
        <Flipcardwho />
        <Flipcardwho />
        <Flipcardwho />
      </div>
    </>
  );
};
