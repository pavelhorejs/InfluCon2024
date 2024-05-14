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

    emailjs.sendForm("", "", form.current, "").then(
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
      <h2 className="pb-4">Register</h2>
      <form
        ref={form}
        className={styles.registrationForm}
        onSubmit={sendEmail}
        noValidate
      >
        <div className="flex flex-wrap gap-3">
          <div>
            {" "}
            <p>FULL NAME</p>
            <input
              {...register("Jmeno")}
              type="text"
              placeholder="Jak Doe"
              className={styles.input}
              name="jmeno"
            />
            {errors.Jmeno && (
              <p className={styles.error}>{errors.Jmeno.message}</p>
            )}
          </div>
          <div>
            {" "}
            <p>COMPANY NAME</p>
            <input
              {...register("Jmeno")}
              type="text"
              placeholder="Best company s.r.o."
              className={styles.input}
              name="jmeno"
            />
            {errors.Jmeno && (
              <p className={styles.error}>{errors.Jmeno.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {" "}
          <div>
            <p>EMAIL</p>
            <input
              {...register("Email")}
              type="email"
              placeholder="jack@email.com"
              className={styles.input}
              name="email"
            />
            {errors.Prijmeni && (
              <p className={styles.error}>{errors.Prijmeni.message}</p>
            )}
          </div>{" "}
          <div>
            <p>PHONE NUMBER</p>
            <input
              {...register("Email")}
              type="email"
              placeholder="+420 777 888 999"
              className={styles.input}
              name="email"
            />
            {errors.Prijmeni && (
              <p className={styles.error}>{errors.Prijmeni.message}</p>
            )}
          </div>
        </div>
        <div>
          <p>ADDRESS</p>
          <input
            {...register("Email")}
            type="email"
            placeholder="Street number 1, Prague, 102 00"
            className={styles.input}
            name="email"
          />
          {errors.Prijmeni && (
            <p className={styles.error}>{errors.Prijmeni.message}</p>
          )}
        </div>
        <div>
          <p>PASSWORD</p>
          <input
            {...register("Email")}
            type="email"
            placeholder="You birthdate?"
            className={styles.input}
            name="email"
          />
          {errors.Prijmeni && (
            <p className={styles.error}>{errors.Prijmeni.message}</p>
          )}
        </div>

        <div className={styles.gdprBorder}></div>
        <Button_red type="submit" text="Register for IMCP 2024" />
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
