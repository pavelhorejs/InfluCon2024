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

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      <Moderator />
      <About />

      <Agenda />
      <Partners />
      <Tickets />

      <Program />

      <Organizer />

      <Blog />
      <Faq />
      <Subscribe />
    </>
  );
}
