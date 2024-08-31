import Image from "next/image";
import Arrow from "@/public/arrow.svg";

interface SpeakersMapProps {
  speakers: {
    name: string;
    position: string;
    topic: string;
    description: string;
    image?: string;
  }[];
}

export default function SpeakersMap({
  speakers,
}: {
  speakers: SpeakersMapProps["speakers"];
}) {
  return (
    <>
      {speakers.map((speaker, index) => (
        <div key={index}>
          <div className="mt-[12px] flex flex-col gap-x-[32px] pb-[12px] md:flex-row">
            <div
              className="flex-shrink-0 transition-all duration-300 ease-in-out"
              style={{ width: "100px", height: "100px" }}
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                layout="responsive"
              />
            </div>
            <div className="flex-grow">
              <div className="pb-[8px]">
                <p className="text-[24px] font-bold">{speaker.name}</p>
                <p className="-mt-[6px] text-[14px]">{speaker.position}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="-mt-[2px] inline-block bg-[#22FFAF] px-[8px] py-[2px] text-[14px] font-bold text-black">
                  {speaker.topic}
                </span>
                <button
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    const target = event.currentTarget;
                    const desc = target
                      .closest(".flex-grow")
                      ?.querySelector("p.description") as HTMLParagraphElement;
                    const imgContainer = target
                      .closest(".flex-col, .flex-row")
                      ?.querySelector(".flex-shrink-0") as HTMLDivElement;
                    const arrow = target.querySelector(
                      "img",
                    ) as HTMLImageElement;

                    if (desc.style.display !== "none") {
                      desc.style.display = "none";
                      imgContainer.style.width = "100px";
                      imgContainer.style.height = "100px";
                      arrow.style.transform = "rotate(0deg)";
                    } else {
                      desc.style.display = "block";
                      imgContainer.style.width = "200px";
                      imgContainer.style.height = "200px";
                      arrow.style.transform = "rotate(90deg)";
                    }
                  }}
                >
                  <Image
                    src={Arrow}
                    alt="arrow icon"
                    className="ml-[12px] w-[12px] transition-transform duration-300"
                  />
                </button>
              </div>
              <div className="mt-[12px] flex items-start">
                <p
                  className="description pb-[4px] text-[14px] text-white transition-all duration-300 ease-in-out"
                  style={{ display: "none" }}
                >
                  {speaker.description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 border-t border-white" />
        </div>
      ))}
    </>
  );
}
