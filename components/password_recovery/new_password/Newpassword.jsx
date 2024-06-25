"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Client, Account } from "appwrite";
import styles from "/components/password_recovery/styles.module.scss";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    if (!userId || !secret) {
      setMessage(t("invalidlink"));
    }
  }, [userId, secret]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage(t("passwordsdonotmatch"));
      return;
    }

    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66329460003701abe30c");
    const account = new Account(client);

    try {
      await account.updateRecovery(userId, secret, password, confirmPassword);
      setMessage(t("passwordchanged"));
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="w-full h-[100vh] gap-[16px] flex flex-col justify-center items-center">
      <h2>{t("newPassword")}</h2>
      <form onSubmit={handleReset} className={styles.form}>
        <div className="pb-[16px]">
          {" "}
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("newpassword")}
            required
          />
        </div>
        <div className="pb-[16px]">
          <input
            className={styles.input}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={t("newpassword2")}
            required
          />
        </div>
        <button className="button" type="submit">
          {t("resetPasswordButton")}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
