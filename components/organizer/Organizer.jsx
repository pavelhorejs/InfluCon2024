import styles from "/components/organizer/styles.module.scss";
import Revealx from "../reveals/Revealx";
const Organizer = () => {
  return (
    <section className={styles.container}>
      <Revealx delay={0.1}>
        <h2>Pořadatel</h2>
      </Revealx>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px]">
        <Revealx>
          {" "}
          <div className="flex justify-center">
            <video
              src="/reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            ></video>
          </div>
        </Revealx>
        <div className="flex flex-col justify-center pl-0 lg:pl-10">
          <div className={styles.blackItem1}></div>
          <div className={styles.blackItem2}></div>
          <div className={styles.greenItem1}></div>
          <div className="flex justify-center md:justify-start ">
            <Revealx delay={0.4}>
              {" "}
              <img src="/woo_logo.svg" className="w-32 mt-5 md:mt-0" alt="" />
            </Revealx>
          </div>
          <Revealx delay={0.5}>
            {" "}
            <p className="text-black text-3xl font-bold mt-3 text-center md:text-left ">
              World of Online
            </p>
          </Revealx>
          <Revealx delay={0.6}>
            {" "}
            <p className="text-center md:text-left">
              Jsme full service digitání agentura a rádi vás poznáváme. Na
              influencer marketingu jsme vyrostli, a i když toho dnes pokrýváme
              mnohem víc, zůstávají influenceři a všechno kolem nich jádrem
              našeho zájmu a byznysu. Baví nás tenhle fenomén zkoumat, sledovat,
              jak se vyvíjí a samozřejmě ho zaměstnávat v praxi. Tak, aby to
              dávalo smysl pro influencery i značky, které chtějí držet krok s
              trendy. Patříte mezi ně? Pak jste tu rozhodně správně.
            </p>
          </Revealx>
        </div>
      </div>
    </section>
  );
};
export default Organizer;
