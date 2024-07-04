import Link from "next/link";
import { useTranslation } from "react-i18next";
const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-screen">
      <h2 className="pb-5 lg:pb-10 text-center max-w-[350px] lg:max-w-3xl">
        {t("ticketPaid")}
      </h2>
      <div
        style={{
          margin: "0px 0px 10px 0px",
          textAlign: "center",
          fontSize: "17px",
          lineHeight: "150%",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {t("addevent")}
        <div
          style={{
            margin: "0px 0px 10px 0px",
            textAlign: "center",
            fontSize: "0px",
          }}
        >
          <a
            href="https://www.addevent.com/event/Vq22277161+apple"
            title="Apple"
            target="_blank"
            style={{ display: "inline-block" }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-apple-t1.png"
              alt="Apple"
              width="45"
              style={{ width: "45px", display: "inline" }}
            />
          </a>
          <a
            href="https://www.addevent.com/event/Vq22277161+google"
            title="Google"
            target="_blank"
            style={{ display: "inline-block" }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-google-t1.png"
              alt="Google"
              width="45"
              style={{ width: "45px", display: "inline" }}
            />
          </a>
          <a
            href="https://www.addevent.com/event/Vq22277161+office365"
            title="Office 365"
            target="_blank"
            style={{ display: "inline-block" }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-office365-t1.png"
              alt="Office 365"
              width="45"
              style={{ width: "45px", display: "inline" }}
            />
          </a>
          <a
            href="https://www.addevent.com/event/Vq22277161+outlook"
            title="Outlook"
            target="_blank"
            style={{ display: "inline-block" }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlook-t1.png"
              alt="Outlook"
              width="45"
              style={{ width: "45px", display: "inline" }}
            />
          </a>
          <a
            href="https://www.addevent.com/event/Vq22277161+outlookcom"
            title="Outlook.com"
            target="_blank"
            style={{ display: "inline-block" }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlookcom-t1.png"
              alt="Outlook.com"
              width="45"
              style={{ width: "45px", display: "inline" }}
            />
          </a>
          <a
            href="https://www.addevent.com/event/Vq22277161+yahoo"
            title="Yahoo"
            target="_blank"
            style={{ display: "inline-block" }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-yahoo-t1.png"
              alt="Yahoo"
              width="45"
              style={{ width: "45px", display: "inline" }}
            />
          </a>
        </div>
        <p
          style={{
            margin: "0",
            padding: "25px 0px 0px 0px",
            textAlign: "center",
          }}
        >
          <a
            href="https://www.addevent.com/?utm_source=event&utm_medium=atclinks&utm_id=plg"
            target="_blank"
            style={{
              fontWeight: "normal",
              color: "#125ef8",
              textDecoration: "underline",
            }}
          ></a>
        </p>
      </div>
      <Link href="/dashboard">
        <button className="buttonGreen">{t("Back")}</button>
      </Link>
    </div>
  );
};
export default Page;
