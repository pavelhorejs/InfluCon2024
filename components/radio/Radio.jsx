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
import Invoice2 from "../pagesrepo/invoice_form/Invoice2";
import { Account, Client, Databases, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66329460003701abe30c");

const database = new appwrite.Databases(client);

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [paymentRecord, setPaymentRecord] = useState(null);
  const [showInvoice1, setShowInvoice1] = useState(false);
  const [showInvoice2, setShowInvoice2] = useState(false);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

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
  const handleInvoice1Toggle = () => {
    setShowInvoice1(!showInvoice1);
    setShowInvoice2(false); // Ensure only one invoice form is shown at a time
  };

  const handleInvoice2Toggle = () => {
    setShowInvoice2(!showInvoice2);
    setShowInvoice1(false); // Ensure only one invoice form is shown at a time
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
              <p className="pb-[40px]">
                <span className="p-1 bg-[#F00065]">
                  {t("oneuseroneticket")}
                </span>
                <br />
                <span className="p-1 bg-[#F00065]">{t("ticketistied")}</span>
              </p>
              <h3 className="text-xl font-bold">{t("platbaOnline")}</h3>
              <p className="pb-[8px]">{t("platbaonůonepopis")}</p>
              <div className={styles.ticketsContainer}>
                <div className={styles.vstupenka}>
                  InfluCon 2024 | {t("TicketHeadline2")} | 4990 Kč
                </div>
                <Link onClick={buyOne} href="#">
                  <Button text="Zaplatit" />
                </Link>
              </div>
              <div className={styles.ticketsContainer}>
                <div className={styles.vstupenka}>
                  InfluCon 2024 | {t("Ticket2Headline2")} | 2490 Kč
                </div>
                <Link onClick={buyTwo} href="#">
                  <Button text="Zaplatit" />
                </Link>
              </div>
              <h3 className="text-xl font-bold pt-[32px]">
                {t("bankPayment")}
              </h3>
              <p className="max-w-[550px] pb-[16px]">{t("bankPaymentText")}</p>

              <div>
                <div className="flex">
                  <div className={styles.vstupenka}>
                    InfluCon 2024 | {t("TicketHeadline2")} | 4990 Kč
                  </div>
                  <button
                    className="buttonGreen ml-[16px] max-w-[130px]"
                    onClick={handleInvoice1Toggle}
                  >
                    {showInvoice1 ? `${t("hideForm")}` : `${t("showForm")}`}
                  </button>
                </div>
                {showInvoice1 && (
                  <div className="mt-[16px]">
                    <Invoice
                      userId={userId}
                      name={user?.name}
                      email={user?.email}
                    />
                  </div>
                )}
              </div>
              <div>
                <div className="flex mt-[16px]">
                  <div className={styles.vstupenka}>
                    InfluCon 2024 | {t("Ticket2Headline2")} | 2490 Kč
                  </div>
                  <button
                    className="buttonGreen ml-[16px] max-w-[130px]"
                    onClick={handleInvoice2Toggle}
                  >
                    {showInvoice2 ? `${t("hideForm")}` : `${t("showForm")}`}
                  </button>
                </div>
                {showInvoice2 && (
                  <div className="mt-[16px]">
                    <Invoice2
                      userId={userId}
                      name={user?.name}
                      email={user?.email}
                    />
                  </div>
                )}
              </div>
              <div>
                {" "}
                <h3 className="font-bold mt-[40px]">
                  Fakturační údaje pořadatele:
                </h3>
                <p>
                  World of Online, s. r. o. <br />
                  Voršilská 139/5, 110 00 Praha <br />
                  IČ: 06063071 <br />
                  DIČ: CZ06063071
                </p>
              </div>
            </div>

            <div className="flex justify-center w-full">
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
