import Hero from "/components/hero/Hero";
import Speakers from "/components/speakers/Speakers";
import About from "/components/about/About";
import Agenda from "/components/agenda/Agenda";
import Tickets from "/components/tickets/Tickets";
import Program from "/components/partner_program/Program";
import Organizer from "/components/organizer/Organizer";
import Partners from "/components/partners/Partners";
import Blog from "/components/blog/Blog";
import Faq from "/components/faq/Faq";
import Subscribe from "/components/subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      <About />
      <Agenda />
      <Tickets />
      <Program />
      <Organizer />
      <Partners />
      <Blog />
      <Faq />
      <Subscribe />
    </>
  );
}
