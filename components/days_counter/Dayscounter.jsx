import { useTranslation } from "react-i18next";
const Dayscounter = () => {
  const entryDate = new Date("10/07/2024");
  const currentDate = new Date();
  const timeDiff = entryDate.getTime() - currentDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const { t } = useTranslation();
  return (
    <div className="text-black font-bold">
      {daysDiff > 0 ? (
        <p>
          {t("countDown")} {daysDiff} {t("countDown2")}
        </p>
      ) : (
        <p>Akce již začala</p>
      )}
    </div>
  );
};
export default Dayscounter;
