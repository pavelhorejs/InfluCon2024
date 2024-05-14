// components/radio/RadioButtons.jsx
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { account } from "/app/appwrite.js";
import styles from "/components/radio/styles.module.scss";
import Button from "/components/buttons/button/Button";
import Link from "next/link";
import * as appwrite from "appwrite";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

import { Account, Client, Databases, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66329460003701abe30c");

const database = new appwrite.Databases(client);

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [paymentRecord, setPaymentRecord] = useState(null);

  console.log("..... ", process.env.NEXT_PUBLIC_STRIPE_SECRET);

  const buyOne = async () => {
    let user = await account.get();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: process.env.NEXT_PUBLIC_OFFLINE_PRODUCT_ID, quantity: 1 },
      ],
      mode: "payment",
      successUrl: `${window.location.origin}/dashboard?user=${user.$id}`,
      cancelUrl: `${window.location.origin}`,
    });
    if (error) {
      console.error(error);
    }
  };
  const buyTwo = async () => {
    let user = await account.get();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: process.env.NEXT_PUBLIC_ONLINE_PRODUCT_ID, quantity: 1 },
      ],
      mode: "payment",
      successUrl: `${window.location.origin}/dashboard?user=${user.$id}`,
      cancelUrl: `${window.location.origin}`,
    });
    if (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function getData() {
      let user = await account.get();
      try {
        const response = await database.listDocuments(
          "66392c30001b34fefa14",
          "66392c62001ed202eeb8",
          [Query.equal("userId", [user?.$id])]
        );

        if (response.documents?.length) {
          setPaymentRecord(response.documents[0]);
        }
      } catch (error) {
        console.error("Error document:", error);
      }
    }
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.radioContainer}>
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          className={styles.radioInput}
          checked={selectedOption === "option1"}
          onChange={() => setSelectedOption("option1")}
        />
        <label htmlFor="option1" className={styles.radioOption}>
          <div
            className={`${styles.radioLabel} ${
              selectedOption === "option1" ? styles.active : ""
            }`}
          >
            Vstupenky
          </div>
        </label>

        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          className={styles.radioInput}
          checked={selectedOption === "option2"}
          onChange={() => setSelectedOption("option2")}
        />
        <label htmlFor="option2" className={styles.radioOption}>
          <div
            className={`${styles.radioLabel} ${
              selectedOption === "option2" ? styles.active : ""
            }`}
          >
            Live stream
          </div>
        </label>
      </div>
      <div className={styles.contentContainer}>
        {selectedOption === "option1" && (
          <div className="flex flex-col md:flex-row gap-20">
            <div>
              <div className={styles.ticketsContainer}>
                <div className={styles.vstupenka}>
                  InfluCon 2024 | Offline ticket | 3990 Kč
                </div>
                <Link onClick={buyOne} href="#">
                  <Button text="Zaplatit" />
                </Link>
              </div>
              <div className={styles.ticketsContainer}>
                <div className={styles.vstupenka}>
                  InfluCon 2024 | Online ticket | 3990 Kč
                </div>
                <Link onClick={buyTwo} href="#">
                  <Button text="Zaplatit" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              {" "}
              {paymentRecord?.paid == "true" &&
              paymentRecord?.paid2 !== "true" ? (
                <img src="/ticket_offline.jpg" alt="" />
              ) : null}
              {paymentRecord?.paid2 == "true" &&
              paymentRecord?.paid !== "true" ? (
                <img src="/ticket_online.jpg" alt="" />
              ) : null}
              {paymentRecord?.paid2 == "true" &&
              paymentRecord?.paid == "true" ? (
                <img src="/ticket_double.jpg" alt="" />
              ) : null}
              {paymentRecord?.paid !== "true" &&
              paymentRecord?.paid2 !== "true" ? (
                <div className={styles.box}>Namáte žádnou vstupenku</div>
              ) : null}
            </div>
          </div>
        )}
        {selectedOption === "option2" && (
          <div className={styles.content}>
            {paymentRecord?.paid !== "true" &&
            paymentRecord?.paid2 !== "true" ? (
              <div>Live stream se zobrazí po zakoupení ONLINE vstupenky.</div>
            ) : (
              <div>Přehrávač se zobrazí v době live streamu.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioButtons;
