"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import MainStage from "@/components/speakers/MainStage";
import InfluStage from "@/components/speakers/InfluStage";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("mainStage");
  const searchParams = useSearchParams();

  useEffect(() => {
    const stage = searchParams.get("stage");
    if (stage === "influ") {
      setSelectedOption("empty");
    }
  }, [searchParams]);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mx-auto mt-[140px] flex max-w-4xl flex-col items-center pb-[200px] md:mt-[200px]">
      <h2 className="pb-[32px] text-[40px] font-bold">Program</h2>

      <div className="mb-[32px] inline-flex" role="group">
        <label
          className={`px-4 py-2 text-sm font-medium ${
            selectedOption === "mainStage"
              ? "bg-[#F00065] text-white"
              : "border border-[#F00065] text-white hover:bg-[#F00065]"
          } `}
        >
          <input
            type="radio"
            value="mainStage"
            checked={selectedOption === "mainStage"}
            onChange={handleOptionChange}
            className="hidden"
          />
          Hlavní Stage
        </label>
        <label
          className={`px-4 py-2 text-sm font-medium ${
            selectedOption === "empty"
              ? "bg-[#F00065] text-white"
              : "border border-[#F00065] text-white hover:bg-[#F00065]"
          }`}
        >
          <input
            type="radio"
            value="empty"
            checked={selectedOption === "empty"}
            onChange={handleOptionChange}
            className="hidden"
          />
          Influ Stage
        </label>
      </div>
      {selectedOption === "mainStage" ? <MainStage /> : <InfluStage />}
    </div>
  );
};

export default Page;
