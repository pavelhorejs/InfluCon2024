"use client";

import styles from "/components/form/form.module.scss";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const form = useRef();
  const { t } = useTranslation();

  const [jmeno, setJmeno] = useState("");
  const [email, setEmail] = useState("");
  const [zprava, setZprava] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqvqb7q",
        "template_cclapuh",
        form.current,
        "rk-nWh1K6i5UfRDP3"
      )

      .then(
        (result) => {
          router.push("/sent");
        },
        (error) => {
          toast.error("Error");
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        className={styles.registrationForm}
        onSubmit={sendEmail}
        noValidate
      >
        <div>
          <p>{t("RegisterJmeno")}</p>
          <input
            type="text"
            placeholder="Jan Novák"
            className={styles.input}
            name="jmeno"
            value={jmeno}
            onChange={(e) => setJmeno(e.target.value)}
          />
        </div>
        <div>
          <p>{t("RegisterEmail")}</p>
          <input
            type="email"
            placeholder="novak@woo.cz"
            className={styles.input}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <p>{t("Zprava")}</p>
          <textarea
            className={styles.textArea}
            placeholder="Dobrý den, ..."
            name="zprava"
            id=""
            cols="30"
            rows="4"
            value={zprava}
            onChange={(e) => setZprava(e.target.value)}
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="button"
          whileHover={{ scale: 0.97 }}
          transition={{ type: "spring" }}
          disabled={!jmeno || !email || !zprava}
        >
          {t("OdeslatZpravu")}
        </motion.button>
      </form>
    </>
  );
}
