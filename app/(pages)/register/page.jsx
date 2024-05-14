"use client";
import { useState } from "react";
import { account, ID, databases } from "/app/appwrite.js";
import Foto from "/public/login-img.webp";
import Image from "next/image";
import Link from "next/link";
import styles from "/components/form/form.module.scss";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Page = () => {
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
        "66392c30001b34fefa14",
        "66392c62001ed202eeb8",
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
      <div className="flex justify-center items-center min-h-[90vh]">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div>
            <>
              <h2 className="pb-[24px] text-center mt-10">Registrovat</h2>
              <form className={styles.registrationForm} noValidate>
                <div className={styles.wrapper}>
                  <div>
                    <p>NAME</p>
                    <input
                      type="text"
                      placeholder="Jan Novák"
                      className={styles.input}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>COMPANY</p>
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
                    <p>EMAIL</p>
                    <input
                      type="email"
                      placeholder="novak@woo.cz"
                      className={styles.input}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>PHONE</p>
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
                  <p>ADDRESS</p>
                  <input
                    type="text"
                    placeholder="Pražská 1, Praha, 100 00"
                    className={styles.input}
                    value={address}
                    autoCcomplete="off"
                    onChange={(e) => setAddress(e.target.value)}
                    autocomplete="off"
                  />
                </div>
                <div>
                  <p>PASSWROD</p>
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
                  Registrovat
                </motion.button>
              </form>
            </>
          </div>
          <p className="mt-[24px] text-sm">
            Již máte účet?{" "}
            <span>
              <Link className={styles.link} href="dashboard">
                Přihlaste se.
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
