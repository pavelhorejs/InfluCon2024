"use client";
import styles from "/components/pagesrepo/invoice_form/styles.module.scss";
import { motion } from "framer-motion";
import { Permission, Role } from "appwrite";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { databases } from "/app/appwrite.js";
import { useRouter } from "next/navigation";

const Invoice = ({ userId, name, email }) => {
  const [company, setCompany] = useState("");
  const [Ic, setIc] = useState("");
  const [Dic, setDic] = useState("");
  const [Mesto, setMesto] = useState("");
  const [Ulice, setUlice] = useState("");
  const [Psc, setPsc] = useState("");
  const [Zeme, setZeme] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Objednavka, setObjednavka] = useState("");
  const [Ticket, setTicket] = useState("Online");
  const [currentDate, setCurrentDate] = useState(""); // New state for current date
  const router = useRouter();

  const { t } = useTranslation();

  useEffect(() => {
    setName(name);
    setEmail(email);
  }, [name, email]);

  useEffect(() => {
    // Update current date when the component mounts
    const formattedDate = new Date().toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);

  const data = {
    company,
    Ic,
    Dic,
    Mesto,
    Ulice,
    Psc,
    Zeme,
    Email,
    Name,
    Objednavka,
    Ticket,
    userId: userId,
    date: currentDate, // Include current date in the form data
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABSE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_INVOICE_COLLECTION_ID,
        "unique()",
        data,
        [Permission.read(Role.any()), Permission.write(Role.any())]
      );
      console.log("Document created:", response);
      router.push("/form_success");
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <div className={styles.form}>
      <form noValidate onSubmit={onSubmit} className={styles.formInner}>
        <input type="hidden" value={currentDate} />

        <p className="text-center -mb-1">{t("form")}</p>
        <div className="flex flex-wrap justify-center gap-[16px]">
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={t("formCompany")}
            className={styles.input}
          />
          <input
            type="text"
            value={Objednavka}
            onChange={(e) => setObjednavka(e.target.value)}
            placeholder={t("formObjednavka")}
            className={styles.input}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-[16px]">
          <input
            value={Ic}
            onChange={(e) => setIc(e.target.value)}
            type="text"
            placeholder={t("formIC")}
            className={styles.input}
          />
          <input
            value={Dic}
            onChange={(e) => setDic(e.target.value)}
            type="text"
            placeholder={t("formDIC")}
            className={styles.input}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-[16px]">
          <input
            value={Mesto}
            onChange={(e) => setMesto(e.target.value)}
            type="text"
            placeholder={t("formCity")}
            className={styles.input}
          />
          <input
            value={Ulice}
            onChange={(e) => setUlice(e.target.value)}
            type="text"
            placeholder={t("formStreet")}
            className={styles.input}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-[16px]">
          <input
            value={Psc}
            onChange={(e) => setPsc(e.target.value)}
            type="text"
            placeholder={t("formCode")}
            className={styles.input}
          />
          <input
            type="text"
            placeholder={t("formCountry")}
            className={styles.input}
            value={Zeme}
            onChange={(e) => setZeme(e.target.value)}
          />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none">
            <div className="flex flex-wrap justify-center gap-[16px]">
              <input value={name} type="text" className={styles.input} />
              <input type="text" className={styles.input} value={email} />
            </div>
          </div>
        </div>
        <select
          name="ticket"
          className="invisible -mt-8"
          value={Ticket}
          onChange={(e) => setTicket(e.target.value)}
        >
          <option value="" disabled>
            {t("zvolteVstupenku")}
          </option>
          <option value="Offline">{t("onlineTicket1")}</option>
          <option value="Online">{t("onlineTicket2")}</option>
        </select>
        <motion.button
          whileHover={{ scale: 0.98 }}
          className={styles.button}
          type="submit"
          disabled={!Ticket}
        >
          {t("ticketButton")}
        </motion.button>
      </form>
    </div>
  );
};

export default Invoice;
