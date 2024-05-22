"use client";
import styles from "/components/tickets/styles.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";

const Tickets = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-6xl mx-auto px-3" id="tickets">
      <Revealx delay={0.2}>
        <h2 className="text-center pb-[48px]">{t("Tickets")}</h2>
      </Revealx>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[48px] ">
        <Revealx delay={0.3}>
          <div className="flex justify-center md:justify-end">
            <div className={styles.ticket}>
              <div className={styles.blackItem1}></div>
              <div className={styles.blackItem2}></div>
              <div className="flex flex-col ">
                <p className={styles.cena}>3990 Kč</p>
                <p className="-mt-4 text-[12px]">Uvedená cena je bez DPH</p>
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
                <Link href="/register">
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
        </Revealx>
        {/* <div className="flex justify-center">
          <div className={`${styles.ticket2} ${styles.largeHeight}`}>
            <p className={styles.cena}> €145</p>
            <p className={styles.typ}>Classic</p>
            <p className={styles.popisek}>
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Unlimited</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Unlimited Premium</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Unlimited Premium</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Advanced Admin</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Unlimited</p>
            </div>
            <div className="mt-4">
              {" "}
              <Link href="/register">
                <Button_red text="Buy ticket" />
              </Link>
            </div>
          </div>
        </div> */}
        <Revealx delay={0.6}>
          {" "}
          <div className="flex justify-center md:justify-start">
            <div className={styles.ticket}>
              <div className={styles.blackItem3}></div>
              <div className={styles.blackItem4}></div>
              <div className="flex flex-col ">
                <p className={styles.cena}>2490 Kč</p>
                <p className="-mt-4 text-[12px]">Uvedená cena je bez DPH</p>
              </div>
              <p className={styles.typ}>{t("Ticket2Headline")}</p>

              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>{t("Ticket2Feature1")}</p>
              </div>
              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>{t("Ticket2Feature2")}</p>
              </div>

              <div className="mt-4">
                {" "}
                <Link href="/register">
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
        </Revealx>
      </div>
    </section>
  );
};
export default Tickets;
