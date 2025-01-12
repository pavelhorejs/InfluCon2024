"use client";

import { useTranslation } from "react-i18next";
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center">
      <h2 className="max-w-[350px] pb-5 text-center lg:max-w-3xl lg:pb-10">
        {t("sent")}
      </h2>
    </div>
  );
}
