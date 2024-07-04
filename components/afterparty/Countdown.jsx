import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Countdown = ({ timeTillDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const interval = setInterval(() => {
      const then = new Date(timeTillDate);
      const now = new Date();
      const countdown = then - now;

      if (countdown > 0) {
        const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (countdown % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        // Countdown finished
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeTillDate]);

  return (
    <div>
      <h1 className="text-center pb-2 lg:pb-0">{t("countdown")}</h1>
      <div className="countdown-wrapper">
        <div className="countdown-item">
          {days} <span>{t("dni")}</span>
        </div>
        <div className="countdown-item">
          {hours} <span>{t("hodin")}</span>
        </div>
        <div className="countdown-item">
          {minutes} <span>{t("minut")}</span>
        </div>
        <div className="countdown-item">
          {seconds} <span>{t("vterin")}</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
