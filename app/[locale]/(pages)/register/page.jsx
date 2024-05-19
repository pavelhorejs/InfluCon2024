"use client";
import { useState } from "react";
import { account, ID, databases } from "/app/appwrite.js";
import Link from "next/link";
import styles from "/components/form/form.module.scss";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Revealx from "/components/reveals/Revealx";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const register = async () => {
    try {
      const { $id } = await account.create(ID.unique(), email, password, name);

      const documentData = {
        userId: $id,
        email,
        name,
        company,
        phoneNumber,
        address,
      };

      await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABSE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_USERS_DATABASE_ID,
        ID.unique(),
        documentData
      );

      router.push("/success");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[90vh] pb-6">
        <div className="flex flex-col justify-center items-center mx-auto px-2">
          <div>
            <>
              <Revealx delay={0.2}>
                {" "}
                <h2 className="pb-[24px] text-center mt-32 lg:mt-10">
                  {t("RegisterHeadline")}
                </h2>
              </Revealx>
              <Revealx delay={0.4}>
                {" "}
                <form className={styles.registrationForm} noValidate>
                  <div className={styles.wrapper}>
                    <div>
                      <p className="mt-[16px] md:mt-0">{t("RegisterJmeno")}</p>
                      <input
                        type="text"
                        placeholder="Jan Novák"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="mt-[16px] md:mt-0">
                        {t("RegisterSpolecnost")}
                      </p>
                      <input
                        type="text"
                        placeholder="World of Online"
                        className={styles.input}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div>
                      <p>{t("RegisterEmail")}</p>
                      <input
                        type="email"
                        placeholder="novak@woo.cz"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="mt-[16px] md:mt-0">{t("RegisterPhone")}</p>
                      <input
                        type="text"
                        placeholder="+420 777 888 999"
                        className={styles.input}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <p>{t("RegisterAdresa")}</p>
                    <input
                      type="text"
                      placeholder="Pražská 1, Praha, 100 00"
                      className={styles.input}
                      value={address}
                      autoComplete="off"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>{t("RegisterHeslo")}</p>
                    <input
                      type="password"
                      placeholder="*******"
                      className={styles.input}
                      value={password}
                      autocomplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className={styles.gdprBorder}></div>
                  <motion.button
                    whileHover={{ scale: 0.99 }}
                    className={styles.button}
                    type="button"
                    onClick={register}
                  >
                    {t("Registrovat")}
                  </motion.button>
                </form>
              </Revealx>
            </>
          </div>
          <Revealx delay={0.6}>
            {" "}
            <p className="mt-[24px] text-sm">
              {t("RegisterAlready")}{" "}
              <span>
                <Link className={styles.link} href="dashboard">
                  {t("RegisterLogin")}
                </Link>
              </span>
            </p>
          </Revealx>
        </div>
      </div>
    </>
  );
};

export default Page;
