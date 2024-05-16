"use client";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";
const Agenda = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-2" id="agenda">
      <Revealx delay={0.2}>
        {" "}
        <h2 className="mb-[32px] text-center lg:text-left">
          {t("programComponent")}
        </h2>
      </Revealx>
      <Revealx delay={0.2}>
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 bg-[#F00065] hover:bg-[#D6005A] py-9 px-9 mb-8 redGlow redCard">
          <div className="redItem1"></div>
          <div className="redItem2"></div>
          <div className="">
            <h3 className="text-4xl font-bold pb-5">10:00-10:45</h3>

            <p className="">{t("programBlock1")}</p>
          </div>
          <div className="">
            <h3 className="text-4xl font-bold pb-5">11:00-13:00</h3>
            <p className="">
              {t("programBlock2")} <br />
              {t("programBlock2_1")}{" "}
            </p>
          </div>
          <div className="">
            <h3 className="text-4xl font-bold pb-5">13:00-14:00</h3>
            <p className="">{t("programBlock3")}</p>
          </div>
        </div>
      </Revealx>
      <Revealx delay={0.4}>
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 bg-[#F00065] hover:bg-[#D6005A] py-9 px-9 redGlow redCard2">
          <div className="redItem3"></div>
          <div className="redItem4"></div>
          <div className="">
            <h3 className="text-4xl font-bold pb-5">14:00-16:00</h3>

            <p className="">
              {t("programBlock4")} <br />
              {t("programBlock4_1")}
            </p>
          </div>
          <div className="">
            <h3 className="text-4xl font-bold pb-5">16:00-18:00</h3>

            <p className="">{t("programBlock5")}</p>
          </div>
          <div className="">
            <h3 className="text-4xl font-bold">20:00</h3>

            <p className="">{t("programBlock6")}</p>
          </div>
        </div>
      </Revealx>
    </section>
  );
};
export default Agenda;
