import Link from "next/link";
import Revealx from "/components/reveals/Revealx";

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto px-2" id="blog">
      <Revealx delay={0.2}>
        {" "}
        <h2 className="pb-[32px] lg:pb-[48px] text-center">
          Mohlo by vás <br className="md:hidden"></br> zajímat
        </h2>
      </Revealx>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {" "}
        <Link href="/blog/trendy_im">
          {" "}
          <div>
            {" "}
            <Revealx delay="0.4">
              {" "}
              <div className="image-box">
                <img src="/im.jpg" alt="blog cover" />
              </div>
            </Revealx>
            <Revealx delay="0.4">
              {" "}
              <p className="mt-[8px] font-bold">
                Trendy v influencer marketingu 2024
              </p>
            </Revealx>
          </div>
        </Link>
        <Link href="/blog/smluvni_ochrana">
          {" "}
          <div>
            {" "}
            <Revealx delay="0.2">
              {" "}
              <div className="image-box">
                <img src="/ochrana.jpg" alt="blog cover" />
              </div>
            </Revealx>
            <Revealx delay="0.4">
              {" "}
              <p className="mt-[8px] font-bold">
                Ochrana je důležitá. I u influencer marketingu.
              </p>
            </Revealx>
          </div>
        </Link>
        <Link href="/blog/analyza_vykonu">
          {" "}
          <div>
            {" "}
            <Revealx delay="0.4">
              {" "}
              <div className="image-box">
                <img src="/kampane.jpg" alt="blog cover" />
              </div>
            </Revealx>
            <Revealx delay="0.4">
              {" "}
              <p className="mt-[8px] font-bold">
                Analýza výkonu 140 influencerských kampaní, které prošly
                agenturou WOO
              </p>
            </Revealx>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Blog;
