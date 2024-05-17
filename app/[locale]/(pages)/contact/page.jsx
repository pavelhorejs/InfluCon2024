"use client";
import Form from "/components/form/Form";
import Socials from "/components/socials/socials_white/Socials";
import { useTranslation } from "react-i18next";
import Revealx from "/components/reveals/Revealx";
const Page = () => {
  const { t } = useTranslation();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-y-10 max-w-7xl mx-auto">
      <div className="mx-2">
        <Revealx delay={0.2}>
          {" "}
          <h2 className="pb-[24px] mt-10 lg:mt-0">{t("ContactHeadline")}</h2>
        </Revealx>
        <Revealx delay={0.4}>
          <p className="max-w-md pb-[16px]">{t("ContactText")}</p>
        </Revealx>
        <Revealx delay={0.6}>
          <p className="text-lg font-bold pb-1">Email</p>
          <p className="pb-[16px]">info@woo.cz</p>
        </Revealx>
        <Revealx delay={0.8}>
          {" "}
          <p className="text-lg font-bold pb-2">{t("socials")}</p>
        </Revealx>
        <div className="">
          <Socials />
        </div>
      </div>
      <div className="mx-2 max-w-[500px]">
        <Revealx delay={0.6}>
          <Form />
        </Revealx>
      </div>
    </section>
  );
};
export default Page;
