"use client";
import styles from "/components/tickets/styles.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Tickets = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="mx-auto max-w-6xl px-3" id="tickets">
      <h2 className="pb-[48px] text-center">{t("Tickets")}</h2>
      <div className="flex justify-center">
        <div className="flex justify-center md:justify-end">
          <div className={styles.ticket}>
            <div className={styles.blackItem1}></div>
            <div className={styles.blackItem2}></div>
            {/* <div className="">
                <p>
                  <span className="bg-[#F00065] text-white px-1 py-0.5 text-[13px] text-center">
                    {t("earlyBird")}
                  </span>
                </p>
              </div> */}
            <div className="flex flex-col">
              <p className={styles.cena}>4990 Kč</p>
              {/* <p className="text-black -mt-4 pb-2 text-[13px]">
                  {t("secondPrice")}
                </p> */}
              {/* <p className="-mt-4 text-[12px]">Uvedená cena je bez DPH</p> */}
            </div>
            <p className={styles.typ}>{t("TicketHeadline")}</p>
            <div className="flex gap-3">
              <img src="/check.svg" alt="check mark icon" />
              <p className={styles.featury}>{t("TicketFeature1")}</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="check mark icon" />
              <p className={styles.featury}>{t("TicketFeature2")}</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="check mark icon" />
              <p className={styles.featury}>{t("TicketFeature3")}</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="check mark icon" />
              <p className={styles.featury}>{t("TicketFeature4")}</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="check mark icon" />
              <p className={styles.featury}>{t("TicketFeature5")}</p>
            </div>
            <div className="mt-4">
              {" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={
                  i18n.language === "cs"
                    ? "https://goout.net/cs/listky/influcon-2024/xdxy/"
                    : "https://goout.net/en/listky/influcon-2024/xdxy/"
                }
              >
                <motion.button
                  whileHover={{ scale: 0.97 }}
                  transition={{ type: "spring" }}
                  className="button"
                >
                  {t("Button3")}
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tickets;
