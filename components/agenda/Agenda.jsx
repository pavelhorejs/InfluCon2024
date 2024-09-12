"use client";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import SmallBlock from "@/components/speakers/SmallBlock";

const Agenda = () => {
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-7xl px-2" id="agenda">
      <Revealx delay={0.2}>
        {" "}
        <h2 className="mb-[16px] text-center">{t("programComponent")}</h2>
      </Revealx>
      <Revealx delay={0.2}>
        <p className="pb-[32px] text-center">{t("tojeoc")}</p>
      </Revealx>
      <div className="flex flex-wrap justify-center gap-[64px]">
        {" "}
        <Revealx delay={0.2}>
          {" "}
          <Link href="/program">
            {" "}
            <div className="redGlow redCard mb-8 min-w-[380px] bg-[#F00065] p-[64px] hover:bg-[#D6005A]">
              <h2 className="text-center text-4xl font-bold">{t("hlstage")}</h2>
            </div>
          </Link>
        </Revealx>
        <Revealx delay={0.4}>
          {" "}
          <Link href="/program#influ">
            {" "}
            <div className="redGlow redCard2 min-w-[380px] bg-[#F00065] p-[64px] hover:bg-[#D6005A]">
              <h2 className="text-center text-4xl font-bold">
                {t("influstage")}
              </h2>
            </div>
          </Link>
        </Revealx>
      </div>
    </section>
  );
};
export default Agenda;
