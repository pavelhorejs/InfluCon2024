import Link from "next/link";
import styles from "/components/footer/Footer.module.scss";
import Socials from "/components/socials/socials_black/Socials";
import Woo from "/components/woo/Woo";

const Footer = () => {
  return (
    <footer className={styles.bgBlue}>
      <div className={styles.container}>
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <img src="/logo_3.svg" className="w-56" alt="" />
          </Link>
          <div className="mt-[24px]">
            <p className="pb-[8px]">Pořadatel</p>
            <Woo />
          </div>

          <div className="flex flex-col justify-center md:justify-start mt-[24px]">
            <p className="pb-3">Sledujte nás online</p>
            <div className="w-full flex justify-center md:justify-start">
              {" "}
              <Socials />
            </div>
          </div>
        </div>

        <nav className={styles.menuSection}>
          <h6>Obecné</h6>
          <Link href="/speakers">
            <span className={styles.navigaceText}>Speakři</span>
          </Link>
          <Link href="/#tickets">
            <span className={styles.navigaceText}>Vstupenky</span>
          </Link>
          <Link href="/#agenda">
            <span className={styles.navigaceText}>Program</span>
          </Link>
          <Link href="/#blog">
            <span className={styles.navigaceText}>Blog</span>
          </Link>
          <a href="/contact">
            <span className={styles.navigaceText}>Kontakt</span>
          </a>
        </nav>
        <nav className={styles.menuSection}>
          <h6>Live stream</h6>
          <a href="/#tickets">
            <span className={styles.navigaceText}>Koupit stream</span>
          </a>
          <a href="/dashboard">
            <span className={styles.navigaceText}>Přihlášení</span>
          </a>
        </nav>
        <nav className={styles.menuSection}>
          <h6>Ostatní</h6>
          <Link href="/cookies">
            <span className={styles.navigaceText}>Cookies</span>
          </Link>
          <Link href="/gdpr">
            <span className={styles.navigaceText}>GDPR</span>
          </Link>
        </nav>
      </div>
      <div>
        <p className="text-center text-sm pb-1 text-gray-600">
          Copyright © 2024 InfluCon
        </p>
      </div>
    </footer>
  );
};
export default Footer;
