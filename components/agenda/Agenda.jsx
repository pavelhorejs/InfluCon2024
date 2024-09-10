"use client";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";
import Link from "next/link";
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
      <Revealx delay={0.2}>
        {" "}
        <div className="redGlow redCard mb-8 bg-[#F00065] px-9 py-9 hover:bg-[#D6005A] lg:grid-cols-4">
          <h2 className="pb-[24px] text-center text-4xl font-bold">
            Hlavní stage
          </h2>
          <div className="grid grid-cols-1 justify-items-center gap-y-[16px] text-center lg:grid-cols-4">
            <div className="redItem1"></div>
            <div className="redItem2"></div>
            <div>
              <h3 className="pb-5 text-center text-4xl font-bold">
                9:00-10:00
              </h3>

              <p>{t("welcome.cofee")}</p>
            </div>
            <div>
              <h3 className="pb-5 text-center text-4xl font-bold">
                10:00-11:00
              </h3>
              <p>
                {t("Agentury")}
                <br />
              </p>
            </div>
            <div>
              <h3 className="pb-5 text-center text-4xl font-bold">
                11:00-12:10
              </h3>
              {t("Znacky")}
            </div>
            <div>
              <h3 className="pb-5 text-center text-4xl font-bold">
                12:10-13:10
              </h3>

              <p>
                {t("programBlock3")} <br />
              </p>
            </div>
          </div>
        </div>
      </Revealx>
      <Revealx delay={0.4}>
        {" "}
        <div className="redGlow redCard2 gap-y-[24px] bg-[#F00065] px-9 py-9 hover:bg-[#D6005A]">
          <h2 className="pb-[24px] text-center text-4xl font-bold">
            Influ stage
          </h2>
          <div className="grid grid-cols-1 justify-items-center gap-y-[16px] text-center lg:grid-cols-4">
            <div className="redItem3"></div>
            <div className="redItem4"></div>

            <div className="">
              <h3 className="pb-5 text-4xl font-bold">9:00-10:00</h3>
              {t("Platformy")} <br />
            </div>
            <div className="">
              <h3 className="pb-5 text-4xl font-bold">10:00-11:00</h3>
              {t("Influenceri")}
            </div>
            <div className="">
              <h3 className="pb-5 text-4xl font-bold">11:00-12:10</h3>
              <p className="">{t("programBlock5")}</p>
            </div>
            <div className="">
              <h3 className="pb-5 text-4xl font-bold">12:10-13:10</h3>

              <p className="">{t("programBlock6")}</p>
            </div>
          </div>
        </div>
      </Revealx>
      <Revealx delay={0.6}>
        <div className="mt-[24px]">
          <Link href="/program">
            <button className="buttonGreen">{t("programButton")}</button>
          </Link>
        </div>
      </Revealx>
    </section>
  );
};
export default Agenda;
