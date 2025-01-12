"use client";
import styles from "/components/subscriber/Subscriber.module.scss";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const validationSchema = yup.object({
  Email: yup
    .string()
    .email("Zadejte email ve správném formátu")
    .required("Prosím zadejte váš email"),
});

export const Subscriber = () => {
  const { t } = useTranslation();
  const notify = () => toast("Úspěšně odebíráno.");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),

    mode: "onSubmit", //
    defaultValues: {
      Email: "",
    },
  });

  return (
    <div className={styles.sub}>
      <div className={styles.wrapper}>
        <h3 className="text-2xl">{t("SubsribeHDL")}</h3>
        <p className="">{t("SubsribeHDL2")}</p>

        <form noValidate>
          {errors.Email && (
            <p className="error d text-xs text-red-600">
              {errors.Email.message}
            </p>
          )}
          <div className={styles.inputWrapper}>
            <input
              {...register("Email")}
              type="Email"
              placeholder="novak@woo.cz"
              className={styles.input}
            />
            <motion.button
              whileHover={{ scale: 0.98 }}
              className={styles.button}
              type="submit"
            >
              {t("SubscirberButton")}
            </motion.button>
          </div>
          <Toaster
            containerStyle={{
              position: "fixed",
              top: "20px",
              right: "15px",
            }}
            toastOptions={{
              className: "",
              style: {
                backgroundColor: "#22FFAF",
                borderRadius: "16px 0.4px 16px  0.4px ",
                padding: "16px",
                color: "black",
              },
            }}
          />
        </form>
      </div>
      <div className={styles.subscribe}></div>
    </div>
  );
};
