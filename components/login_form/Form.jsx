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
        "service_x5bzg600v",
        "template_iyvb00aqv",
        form.current,
        "fuHvdP0IZd3B_tO00gs"
      )
      .then(
        (result) => {
          toast.success("Zpráva byla úspěšně odeslána!");
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
          {" "}
          <p>LOGIN</p>
          <input
            {...register("Jmeno")}
            type="text"
            placeholder="Your email"
            className={styles.input}
            name="jmeno"
          />
          {errors.Jmeno && (
            <p className={styles.error}>{errors.Jmeno.message}</p>
          )}
        </div>
        <div>
          {" "}
          <p>PASSWORD</p>
          <input
            {...register("Jmeno")}
            type="text"
            placeholder="Your birthdate?"
            className={styles.input}
            name="jmeno"
          />
          {errors.Jmeno && (
            <p className={styles.error}>{errors.Jmeno.message}</p>
          )}
        </div>

        <div className={styles.gdprBorder}></div>
        <Button_red type="submit" text="Log in" />
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
