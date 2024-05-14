import Subscriber from "/components/subscriber/Subscriber";
import Revealx from "../reveals/Revealx";
const Subscribe = () => {
  return (
    <section className="max-w-7xl mx-auto px-2">
      <Revealx delay={0.2}>
        {" "}
        <h2 className="text-center pb-[32px] lg:pb-[48px]">
          Ať vám nic neuteče!
        </h2>
      </Revealx>
      <Revealx delay={0.4}>
        {" "}
        <Subscriber />
      </Revealx>
    </section>
  );
};
export default Subscribe;
