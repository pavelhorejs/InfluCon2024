import styles from "/components/tickets/styles.module.scss";
import Button_red from "/components/buttons/button_red/Button_red";
import Link from "next/link";
import Revealx from "../reveals/Revealx";
const Tickets = () => {
  return (
    <section className="max-w-6xl mx-auto px-3" id="tickets">
      <Revealx delay={0.2}>
        <h2 className="text-center pb-[48px]">Vstupenky</h2>
      </Revealx>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[48px] ">
        <Revealx delay={0.3}>
          {" "}
          <div className="flex justify-center md:justify-end">
            <div className={styles.ticket}>
              <div className={styles.blackItem1}></div>
              <div className={styles.blackItem2}></div>
              <p className={styles.cena}> 3990 Kč</p>
              <p className={styles.typ}>OFFLINE TICKET</p>

              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>
                  x přednášek profesionálů z celého světa
                </p>
              </div>
              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>
                  Catering, káva i nealko během celého dne
                </p>
              </div>
              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>
                  Videozáznamy všech přednášek ve vysoké kvalitě
                </p>
              </div>
              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>Vstup na afterparty</p>
              </div>
              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>
                  Networking se seniorními marketéry z firem i agentur,
                  freelancery a influencery
                </p>
              </div>
              <div className="mt-4">
                {" "}
                <Link href="/register">
                  <Button_red text="Koupit lístek" />
                </Link>
              </div>
            </div>
          </div>
        </Revealx>
        {/* <div className="flex justify-center">
          <div className={`${styles.ticket2} ${styles.largeHeight}`}>
            <p className={styles.cena}> €145</p>
            <p className={styles.typ}>Classic</p>
            <p className={styles.popisek}>
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Unlimited</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Unlimited Premium</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Unlimited Premium</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Advanced Admin</p>
            </div>
            <div className="flex gap-3">
              <img src="/check.svg" alt="" />
              <p className={styles.featury}>Unlimited</p>
            </div>
            <div className="mt-4">
              {" "}
              <Link href="/register">
                <Button_red text="Buy ticket" />
              </Link>
            </div>
          </div>
        </div> */}
        <Revealx delay={0.6}>
          {" "}
          <div className="flex justify-center md:justify-start">
            <div className={styles.ticket}>
              <div className={styles.blackItem3}></div>
              <div className={styles.blackItem4}></div>
              <p className={styles.cena}> 3990 Kč</p>
              <p className={styles.typ}>ONLINE TICKET</p>

              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>
                  x přednášek profesionálů z celého světa
                </p>
              </div>
              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>
                  Videozáznamy všech přednášek ve vysoké kvalitě
                </p>
              </div>
              <div className="flex gap-3">
                <img src="/check.svg" alt="" />
                <p className={styles.featury}>Vstup na after party</p>
              </div>

              <div className="mt-4">
                {" "}
                <Link href="/register">
                  <Button_red text="Koupit lístek" />
                </Link>
              </div>
            </div>
          </div>
        </Revealx>
      </div>
    </section>
  );
};
export default Tickets;
