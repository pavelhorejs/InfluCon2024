"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "/components/form/form.module.scss";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button_red from "/components/buttons/button_red/Button_red";

const validationSchema = yup
  .object({
    Jmeno: yup.string().required("Tento údaj je povinný"),
    Prijmeni: yup.string().required("Tento údaj je povinný"),
    Email: yup
      .string()
      .required("Tento údaj je povinný")
      .email("Zadejte email ve správném formátu"),
  })
  .required();

export default function Page() {
  const notify = () => toast("Zpráva odeslána.");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      Jmeno: "",
      Prijmeni: "",
      Email: "",
    },
  });

  const form = useRef();

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
          toast.success("Zpráva byla úspěšně odeslána!");
          form.current.reset();
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
          <p>JMÉNO</p>
          <input
            {...register("Jmeno")}
            type="text"
            placeholder="Jan Novák"
            className={styles.input}
            name="jmeno"
          />
          {errors.Jmeno && (
            <p className={styles.error}>{errors.Jmeno.message}</p>
          )}
        </div>
        <div>
          <p>EMAIL</p>
          <input
            {...register("Email")}
            type="email"
            placeholder="novak@woo.cz"
            className={styles.input}
            name="email"
          />
          {errors.Prijmeni && (
            <p className={styles.error}>{errors.Prijmeni.message}</p>
          )}
        </div>

        <div>
          <p>ZPRÁVA</p>
          <textarea
            className={styles.textArea}
            placeholder="Dobrý den, ..."
            name="zprava"
            id=""
            cols="30"
            rows="4"
          ></textarea>
        </div>
        <div className={styles.gdprBorder}></div>

        <Button_red type="submit" text="Odeslat zprávu" />

        <Toaster
          containerStyle={{
            position: "fixed",
            top: "20px",
            right: "15px",
          }}
          toastOptions={{
            className: "",
            style: {
              backgroundColor: "#F00065",
              padding: "16px",
              color: "#FFFFFF",
            },
          }}
        />
      </form>
    </>
  );
}
