"use client";

import { useState } from "react";
import { Client, Account } from "appwrite";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const Passwordrecovery = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const handleRecovery = async (e) => {
    e.preventDefault();
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66329460003701abe30c");
    const account = new Account(client);

    try {
      await account.createRecovery(email, "http://influcon.cz/new_password");
      setMessage(t("recoverysent"));
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[16px]">
      <h2>{t("recovery")}</h2>
      <p className="text-center">
        {t("recovery1")}
        <br />
        {t("recovery2")}
      </p>
      <form onSubmit={handleRecovery} className={styles.form}>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="novak@woo.cz"
          required
        />
        <button className="button mt-[16px]" type="submit">
          {t("sendRecoverybutton")}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Passwordrecovery;
