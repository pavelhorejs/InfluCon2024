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
    <>
      <Hero />

      <Image
        src="/blur_red.png"
        alt="hero"
        className="absolute left-[-550px] top-[600px]"
        width={800}
        height={800}
      />

      <About />
      <Tickets />
      <Image
        src="/blur_green.png"
        alt="hero"
        className="absolute right-[-600px] top-[1400px]"
        width={800}
        height={800}
      />
      <Speakers />
      <Image
        src="/blur_green.png"
        alt="hero"
        className="absolute left-[-550px] top-[2900px]"
        width={800}
        height={800}
      />
      <Agenda />
      <Image
        src="/blur_red.png"
        alt="hero"
        className="absolute left-[-500px] top-[3900px]"
        width={800}
        height={800}
      />
      <Image
        src="/blur_green.png"
        alt="hero"
        className="absolute right-[-500px] top-[4400px]"
        width={800}
        height={800}
      />
      <Image
        src="/blur_red.png"
        alt="hero"
        className="absolute left-[-500px] top-[4900px]"
        width={800}
        height={800}
      />
      <Partners />
      <Image
        src="/blur_green.png"
        alt="hero"
        className="absolute right-[-500px] top-[5800px]"
        width={800}
        height={800}
      />
      <Moderator />
      <Program />
      <Organizer />
      <Blog />
      <Image
        src="/blur_red.png"
        alt="hero"
        className="absolute left-[-500px] top-[7700px]"
        width={800}
        height={800}
      />
      <Faq />
      <Wroteaboutus />
      <Image
        src="/blur_green.png"
        alt="hero"
        className="absolute right-[-600px] top-[8500px]"
        width={800}
        height={800}
      />
      <Subscribe />
    </>
  );
}
