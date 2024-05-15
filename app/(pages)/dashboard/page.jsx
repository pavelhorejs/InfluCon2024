"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { account } from "/app/appwrite.js";
import RadioButtons from "/components/radio/Radio";
import RadioButtons2 from "/components/radio2/Radio";
import styles from "/components/form/form.module.scss";
import Link from "next/link";
import Revealx from "../../../components/reveals/Revealx";
const Page = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const form = useRef();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    setLoggedInUser(user);
  }, []);

  const login = async (email, password) => {
    try {
      await account.deleteSession("current");
    } catch (error) {}

    const session = await account.createEmailPasswordSession(email, password);
    const user = await account.get();
    setLoggedInUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = async () => {
    await account.deleteSession("current");
    localStorage.removeItem("user");
    setLoggedInUser(null);
  };
  console.log("loggedInUser", loggedInUser);

  if (loggedInUser) {
    return (
      <>
        <section className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between bg-[#100D0D] py-3 px-3">
            <p>Jste přihlášen jako uživatel: {loggedInUser.name}</p>
            <button className="link" type="button" onClick={logout}>
              Odhlásit
            </button>
          </div>
          {loggedInUser.$id === "664508a70034600e72a3" ? (
            <div>
              <RadioButtons2 />
            </div>
          ) : (
            <RadioButtons />
          )}
        </section>
      </>
    );
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center min-h-[90vh]  ">
        <div></div>
        <div className="flex flex-col justify-center items-center">
          <Revealx delay={0.2}>
            {" "}
            <h2 className="pb-[24px] text-center">Login</h2>
          </Revealx>
          <Revealx delay={0.4}>
            {" "}
            <form ref={form} className={styles.loginForm} noValidate>
              <div>
                <p>EMAIL</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="novak@woo.cz"
                  className={styles.input}
                />
              </div>
              <div>
                <p>HESLO</p>
                <input
                  type="password"
                  placeholder="*****"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.gdprBorder}></div>
              <motion.button
                whileHover={{ scale: 0.99 }}
                className={styles.buttonGreen}
                type="button"
                onClick={() => login(email, password)}
              >
                Login
              </motion.button>
            </form>
          </Revealx>
          <Revealx delay={0.6}>
            {" "}
            <p className="mt-5 text-sm">
              Ještě nemáte účet?{" "}
              <span>
                <Link className={styles.link} href="/register">
                  Registrujte se.
                </Link>
              </span>
            </p>
          </Revealx>
        </div>
      </div>
    </div>
  );
};

export default Page;
