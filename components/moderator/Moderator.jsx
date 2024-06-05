"use client";
import { useTranslation } from "react-i18next";
import Revealx from "../reveals/Revealx";
const Moderator = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Revealx delay={0.4}>
        <section className="flex flex-col gap-5 max-w-6xl mx-auto px-2">
          {" "}
          <img src="/moderator.webp" alt="moderator" />
          <p className="text-xl">
            {t("tigran")}{" "}
            <a href="https://www.instagram.com/tigran_hovakimyan/?hl=cs">
              <span className="underline greenhover">{t("tigran2")}</span>
            </a>
          </p>
        </section>
      </Revealx>
    </div>
  );
};
export default Moderator;
