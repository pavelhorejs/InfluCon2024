import Hero from "/components/hero/Hero";
import Speakers from "/components/speakers/Speakers";
import About from "/components/about/About";
import Agenda from "/components/agenda/Agenda";
import Moderator from "/components/moderator/Moderator";
import Tickets from "/components/tickets/Tickets";
import Program from "/components/partner_program/Program";
import Organizer from "/components/organizer/Organizer";
import Blog from "/components/blog/Blog";
import Faq from "/components/faq/Faq";
import Subscribe from "/components/subscribe/Subscribe";
import Partners from "../../components/partners/Partners";
import Wroteaboutus from "../../components/wroteaboutus/Wroteaboutus";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="z-10">
        {" "}
        <Hero />
      </div>
      <Image
        src="/blur_red.png"
        alt="Decorative red blur"
        className="pointer-events-none absolute left-[-120px] top-[600px] -translate-x-1/2"
        width={700}
        height={800}
      />

      <About />
      <Tickets />
      <Image
        src="/blur_green.png"
        alt="Decorative green blur"
        className="pointer-events-none absolute right-[-150px] top-[1400px] translate-x-1/2"
        width={800}
        height={800}
      />
      <Speakers />
      <Image
        src="/blur_green.png"
        alt="Decorative green blur"
        className="pointer-events-none absolute left-[-150px] top-[2900px] -translate-x-1/2"
        width={800}
        height={800}
      />
      <Agenda />
      <Image
        src="/blur_red.png"
        alt="Decorative red blur"
        className="pointer-events-none absolute left-[-150px] top-[3900px] -translate-x-1/2"
        width={800}
        height={800}
      />
      <Image
        src="/blur_green.png"
        alt="Decorative green blur"
        className="pointer-events-none absolute right-[-150px] top-[4400px] translate-x-1/2"
        width={800}
        height={800}
      />
      <Image
        src="/blur_red.png"
        alt="Decorative red blur"
        className="pointer-events-none absolute left-[-150px] top-[4900px] -translate-x-1/2"
        width={800}
        height={800}
      />
      <Partners />
      <Image
        src="/blur_green.png"
        alt="Decorative green blur"
        className="pointer-events-none absolute right-[-150px] top-[5800px] translate-x-1/2"
        width={800}
        height={800}
      />
      <Program />
      <Moderator />
      <Organizer />
      <Blog />
      <Image
        src="/blur_red.png"
        alt="Decorative red blur"
        className="pointer-events-none absolute left-[-150px] top-[7700px] -translate-x-1/2"
        width={800}
        height={800}
      />
      <Faq />
      <Wroteaboutus />
      <Image
        src="/blur_green.png"
        alt="Decorative green blur"
        className="pointer-events-none absolute right-[-150px] top-[8500px] translate-x-1/2"
        width={800}
        height={800}
      />
      <Subscribe />
    </div>
  );
}
