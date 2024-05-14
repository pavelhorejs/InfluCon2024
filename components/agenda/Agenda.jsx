import styles from "/components/agenda/styles.module.scss";
import Revealx from "../reveals/Revealx";
const Agenda = () => {
  return (
    <section className="max-w-7xl mx-auto px-2" id="agenda">
      <Revealx delay={0.2}>
        {" "}
        <h2 className="mb-[32px]">Program</h2>
      </Revealx>
      <Revealx delay={0.2}>
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 bg-[#F00065] py-9 px-9 mb-8 redGlow">
          <div className="">
            <h3 className="text-4xl font-bold">10:00-10:45</h3>
            <p className="font-bold">Registrace, káva & networking</p>
          </div>
          <div className="">
            <h3 className="text-4xl font-bold">11:00-13:00</h3>
            <p className="font-bold">Blok I a II</p>
          </div>
          <div className="">
            <h3 className="text-4xl font-bold">13:00-14:00</h3>
            <p className="font-bold">Oběd</p>
          </div>
        </div>
      </Revealx>
      <Revealx delay={0.4}>
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 bg-[#F00065] py-9 px-9 redGlow">
          <div className="">
            <h3 className="text-4xl font-bold">14:00-16:00</h3>
            <p className="font-bold">Blok III a IV</p>
          </div>
          <div className="">
            <h3 className="text-4xl font-bold">16:00-18:00</h3>
            <p className="font-bold">Networking a setkání s influencery</p>
          </div>
          <div className="">
            <h3 className="text-4xl font-bold">21:00</h3>
            <p className="font-bold">After party</p>
          </div>
        </div>
      </Revealx>
    </section>
  );
};
export default Agenda;
