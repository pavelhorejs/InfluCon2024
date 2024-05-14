import Revealx from "../reveals/Revealx";
const Partners = () => {
  return (
    <section className="max-w-7xl mx-auto px-2">
      <Revealx delay={0.2}>
        {" "}
        <h2 className="pb-[32px] lg:pb-[48px] text-center">
          Partneři <br className="md:hidden"></br> a sponzoři
        </h2>
      </Revealx>
      <div className="md:grid grid-cols-2 md:grid-cols-4 gap-y-20 justify-items-center hidden ">
        <img width="150" src="/woo_logo.svg" alt="" />
        <img width="150" src="/woo_logo.svg" alt="" />
        <img width="150" src="/woo_logo.svg" alt="" />
        <img width="150" src="/woo_logo.svg" alt="" />
        <img width="150" src="/woo_logo.svg" alt="" />
        <img width="150" src="/woo_logo.svg" alt="" />
        <img width="150" src="/woo_logo.svg" alt="" />
        <img width="150" src="/woo_logo.svg" alt="" />
      </div>
      <div className="grid grid-cols-1 gap-y-10 justify-items-center md:hidden ">
        <img width="150" src="/woo_logo.svg" alt="" />
        <img width="150" src="/woo_logo.svg" alt="" />
        <img width="150" src="/woo_logo.svg" alt="" />
      </div>
    </section>
  );
};
export default Partners;
