"use client";
import { useState, useEffect } from "react";
import { Recording } from "@/components/Recording";
import { useTranslation } from "react-i18next";
const ALLOWED_EMAIL = "kcimoradska@gmail.com";

export default function Page() {
  const [email, setEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    // Check localStorage on component mount
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail === ALLOWED_EMAIL) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ALLOWED_EMAIL) {
      localStorage.setItem("userEmail", email);
      setIsAuthenticated(true);
    } else {
      alert("Invalid email");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    setEmail("");
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto flex max-w-7xl justify-between gap-4 px-[24px] pt-[140px]">
          <div className="invisible">Welcome! You are authenticated!</div>
          <div>
            <button
              onClick={handleLogout}
              className="rounded bg-[#F00065] px-4 py-2 text-white hover:bg-[#F00065]/80"
            >
              {t("logout")}
            </button>
          </div>
        </div>
        <Recording />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("zadejtemail")}
          className="rounded border border-[#22FFAF] bg-transparent p-2 text-white"
          required
        />
        <button
          type="submit"
          className="rounded border border-[#22FFAF] px-4 py-2 text-white hover:bg-[#22FFAF]/80"
        >
          {t("LoginPrihlasit")}
        </button>
      </form>
    </div>
  );
}
