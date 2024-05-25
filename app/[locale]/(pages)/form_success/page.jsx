"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-screen">
      <h2 className="pb-5 lg:pb-10 text-center max-w-[350px] lg:max-w-3xl">
        {t("formSent")}
      </h2>

      <Link href="/dashboard">
        <button className="buttonGreen">{t("Back")}</button>
      </Link>
    </div>
  );
};
export default Page;
