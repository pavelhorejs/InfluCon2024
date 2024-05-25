import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { account } from "/app/appwrite.js";
import styles from "/components/radio/styles.module.scss";
import Button from "/components/buttons/button/Button";
import Link from "next/link";
import * as appwrite from "appwrite";
import { useTranslation } from "react-i18next";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);
import Invoice from "../pagesrepo/invoice_form/Invoice";
import { Account, Client, Databases, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66329460003701abe30c");

const database = new appwrite.Databases(client);

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [paymentRecord, setPaymentRecord] = useState(null);
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null); // Add user state

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await account.get();
        setUser(user); // Set the user state
        setUserId(user.$id);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    }

    fetchUser();
  }, []);

  const buyOne = async () => {
    let user = await account.get();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: process.env.NEXT_PUBLIC_OFFLINE_PRODUCT_ID, quantity: 1 },
      ],
      mode: "payment",
      successUrl: `${window.location.origin}/ticket_paid?user=${user.$id}`,
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
      successUrl: `${window.location.origin}/ticket_paid?user=${user.$id}`,
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
  const handleButtonClick = () => {
    setShowNewComponent(!showNewComponent);
  };

  const { t } = useTranslation();
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
            {t("Tickets")}
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
              <h3 className="text-xl pb-[8px]">Platba online</h3>
              <div className={styles.ticketsContainer}>
                <div className={styles.vstupenka}>
                  InfluCon 2024 | {t("TicketHeadline2")} | 3990 Kč bez DPH
                </div>
                <Link onClick={buyOne} href="#">
                  <Button text="Zaplatit" />
                </Link>
              </div>
              <div className={styles.ticketsContainer}>
                <div className={styles.vstupenka}>
                  InfluCon 2024 | {t("Ticket2Headline2")} | 2490 Kč bez DPH
                </div>
                <Link onClick={buyTwo} href="#">
                  <Button text="Zaplatit" />
                </Link>
              </div>
              <h3 className="text-xl pt-[64px]">{t("bankPayment")}</h3>
              <p className="max-w-[550px] pb-[16px]">{t("bankPaymentText")}</p>

              <div>
                <button className="buttonGreen" onClick={handleButtonClick}>
                  {showNewComponent ? `${t("hideForm")}` : `${t("showForm")}`}
                </button>
                {showNewComponent && (
                  <div className="mt-10">
                    {" "}
                    <Invoice
                      userId={userId}
                      name={user?.name}
                      email={user?.email}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              {" "}
              {paymentRecord?.paid == "true" &&
              paymentRecord?.paid2 !== "true" ? (
                <>
                  {" "}
                  <img src="/ticket_offline.jpg" alt="" />
                </>
              ) : null}
              {paymentRecord?.paid2 == "true" &&
              paymentRecord?.paid !== "true" ? (
                <img src="/ticket_online.jpg" alt="" />
              ) : null}
              {paymentRecord?.paid2 == "true" &&
              paymentRecord?.paid == "true" ? (
                <>
                  {" "}
                  <img src="/ticket_double.jpg" alt="" />
                </>
              ) : null}
              {paymentRecord?.paid !== "true" &&
              paymentRecord?.paid2 !== "true" ? (
                <div className={styles.box}>{t("NoTicket")}</div>
              ) : null}
            </div>
          </div>
        )}
        {selectedOption === "option2" && (
          <div className={styles.content}>
            {paymentRecord?.paid !== "true" &&
            paymentRecord?.paid2 !== "true" ? (
              <div>{t("LiveStream")}</div>
            ) : (
              <div>{t("LiveStream2")}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioButtons;
