"use client";
import styles from "/components/subscriber/Subscriber.module.scss";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { databases } from "/app/appwrite";
import { Permission, Role } from "appwrite";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const validationSchema = yup.object({
  Email: yup
    .string()
    .email("Zadejte email ve správném formátu")
    .required("Prosím zadejte váš email"),
});

const Subscriber = () => {
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

  const onSubmit = async (data) => {
    try {
      const response = await databases.createDocument(
        "66392c30001b34fefa14",
        "663bcd6c003e4b981a09",
        "unique()",
        data,
        [Permission.read(Role.any()), Permission.write(Role.any())]
      );
      console.log("Document created:", response);
      notify();
      form.current.reset();
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <div className={styles.sub}>
      <div className={styles.wrapper}>
        <h3 className="text-2xl">{t("SubsribeHDL")}</h3>
        <p className="">{t("SubsribeHDL2")}</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {errors.Email && (
            <p className="error text-xs text-red-600 ml-4 mt-1 mb-2 absolute">
              {errors.Email.message}
            </p>
          )}
          <div className={styles.inputWrapper}>
            <input
              {...register("Email")}
              type="Email"
              placeholder="Váš e-mail"
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
                border: "1px solid #002554",
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
export default Subscriber;
