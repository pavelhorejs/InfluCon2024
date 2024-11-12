"use client";
import { useState, useEffect } from "react";
import { Recording } from "@/components/Recording";
import { useTranslation } from "react-i18next";

const ALLOWED_EMAILS = [
  "kcimoradska@gmail.com",
  "veronika@salonpro.cz",
  "kamila.salatova@testuj.to",
  "mazankova@know.cz",
  "jakub.johanides@addict.cz",
  "tereza.navratilova@slevomat.cz",
  "martin.kyncl@lafluence.com",
  "katerina.blehova@grayling.com",
  "vackova.alu@gmail.com",
  "ivana@puremodel.cz",
  "lukas.metelka@mwmotors.cz",
  "karolina.krtenova@storytlrs.cz",
  "psohlavec@czub.cz",
  "sylvie.hlobilova@givet.it",
  "renata.vachova@givet.it",
  "robert.renc@magnas.cz",
  "sara.hricisakova@magnas.cz",
  "lasovska@sazka.cz",
  "adam.dusek@fuse.cz",
  "lucie.cachotska@fuse.cz",
  "simona.samcova@fuse.cz",
  "jindriska.medkova@peppermint.cz",
  "honza@peppermint.cz",
  "dominika.rejzlova@fragile.cz",
  "valerie.saskova@marketup.cz",
  "tereza.hajduchova@navystavisti.cz",
  "e.tulachova@llbg.com",
  "z.ruzek@maspex.com",
  "k.lebedova@maspex.com",
  "veronika.busova@henkel.com",
  "valentyna.v.scerbej@henkel.com",
  "kristyna.ferova@foxy.cz",
  "ostra@holesovickatrznice.cz",
  "tana.borosova@fragile.cz",
  "s.bukovska2@globus.cz",
  "petra@petramatejkova.cz",
  "p.komarovova@cz.naos.com",
  "office@creaticom.cz",
  "motyckova@italystyle.cz",
  "jlexova@csas.cz",
  "zaneta.blaschkeova@promotion.cz",
  "katerina.zelena@wmcgrey.cz",
  "nikola.hoangova@asko.net",
  "petra.dolejskova@boomerang.agency",
  "juraj.kruzelak@gymbeam.com",
  "mia.jadrna@getsnuggs.com",
  "tereza.hadrbolcova@ogilvy.com",
  "marketing@youngrepublic.cz",
  "hana.dumbrovska@marks-and-spencer.com",
  "linda.pavlik@marks-and-spencer.com",
  "lucie.ulrichova@marks-and-spencer.com",
  "jan.bilek@pre.cz",
  "karel.hanzelka@pre.cz",
  "viktor.prochazka@yello.cz",
  "hana.mayerova@canda.com",
  "lucie.stepankova@unilever.com",
  "karin.lorincova@unilever.com",
  "lara.bosnjak@unilever.com",
  "veronika.cesarova@unilever.com",
  "dominik.schnelly@b.cz",
  "petra.pokorna@b.cz",
  "barbora.halamkova@nova.cz",
  "lubor.burda@nova.cz",
  "adam@influencer.cz",
  "atanur.sumer@trendyol.com",
  "merve.akbiyik@trendyol.com",
  "theres.debul@trendyol.com",
  "sila.bilgin@trendyol.com",
  "jakub.kraml@roxy.cz",
  "zuzana@loudova.info",
  "jakub.drahonsky@vscht.cz",
  "diana.ciefova@notino.com",
  "barbora.hlavinkova@notino.com",
  "don.nguyen@notino.com",
  "klaraklimovaa0610@seznam.cz",
  "klara.sprtova@influencer.cz",
  "durdak@holik-international.cz",
  "p.laton@kaizengaming.com",
  "m.ustohal@kaizengaming.com",
  "kadlect66@gmail.com",
  "viktoria@ideaelement.sk",
  "mjiras@webetter.cz",
  "adela.vasickova@publicisgroupe.cz",
  "prochazkova@jccr.cz",
  "jana.podlipna@lobey.cz",
  "martina.kyselkova@knktr.cz",
  "info@petrhandlir.cz",
  "vojtech.kubricht@cz.nestle.com",
  "hana.drahokoupilova@gmail.com",
  "vojtech.bulir@gmail.com",
  "jelinkova.naty@seznam.cz",
  "terezastara86@gmail.com",
  "petr.furmanek@porsche-engineering.cz",
  "katerina.kratochvilova2@skoda-auto.cz",
  "jan@taneceksmuchou.com",
  "eliska@taneceksmuchou.com",
  "sarkatosnarova@gmail.com",
  "stepan.albert@notino.com",
  "adela.svobodova@radiohouse.cz",
  "jaroslav.nosek@radiohouse.cz",
  "natalie.molnarova@trenyrkarna.cz",
  "ondrej.pojzl@echopromotion.cz",
  "vendula.skoloudova@echopromotion.cz",
  "novako.sarka@seznam.cz",
  "aneta.kratochvilova@fajnradio.cz",
  "pajita@badkid.cz",
  "maja@badkid.cz",
  "stinkovah@gmail.com",
  "jelen.duricic@gmail.com",
  "jevgenia.olar@gmail.com",
  "peter.varga.official@gmail.com",
  "julia.medvid@vonage.com",
  "magdalena.dudek@vonage.com",
  "wojciech.oledzki@vonage.com",
  "pavla_z@centrum.cz",
  "lucie.vanickova@iinfo.cz",
  "kristy.jana.smejkalova@gmail.com",
  "michal.mladek@sherpas.cz",
  "roman.polok@loreal.com",
  "eva.hrubesova@loreal.com",
  "vanessa.homolyova@loreal.com",
  "klara.blazkova@loreal.com",
  "daniel.badura@loreal.com",
  "nikola.lomencikova@loreal.com",
  "andrea.marinova@loreal.com",
  "veronika.pecinova@loreal.com",
  "petra.veselovska@loreal.com",
  "viettrinh.nguyenova@loreal.com",
  "kristyna.plockova@loreal.com",
  "denisa.kadanova@loreal.com",
  "gabriela.fricova@loreal.com",
  "jan.pistek@loreal.com",
  "ludmila.faltusova@loreal.com",
  "peter.toth@loreal.com",
  "katerina.kosutova@loreal.com",
  "veronika.havettova@loreal.com",
  "kristina.koucka@loreal.com",
  "tomas.demeter@loreal.com",
  "adela.prokopova@loreal.com",
  "tereza.obrtac@loreal.com",
  "david.stirber@loreal.com",
  "veronika.hanzelyova@loreal.com",
  "ivana.veselenyi@loreal.com",
  "petra.ruzickova@loreal.com",
  "jakub.groler@loreal.com",
  "thanhvy.le@loreal.com",
  "maria.sobcakova@loreal.com",
  "kristina.jurickova@loreal.com",
  "esztella.lancz@loreal.com",
  "zuzana.ungerova@loreal.com",
  "sara.daniel@loreal.com",
  "bela.mlynarikova@loreal.com",
  "haiyen.hoang@loreal.com",
  "jiri.nemeth@loreal.com",
  "barbora.krcmarova@loreal.com",
  "klara.sladeckova@loreal.com",
  "zuzana.kaczor@loreal.com",
  "tomas.bubeliny@loreal.com",
  "simona.petrikova@loreal.com",
  "lucie.kralickova@loreal.com",
  "erman.ozturk@trendyol.com",
  "katerina.hrubesova@aka.cz",
  "tereza.tumova@spir.cz",
  "petr.srna@woo.cz",
  "david.zamecnik@woo.cz",
  "martin.katkovcin@woo.cz",
  "jan.makovic@woo.cz",
  "martin.fryc@woo.cz",
  "kristyna.latyk@woo.cz",
  "adela.maderycova@woo.cz",
  "valerie.sedlackova@woo.cz",
  "dusan.lekic@woo.cz",
  "stepan.protiva@woo.cz",
  "pavel.pesek@woo.cz",
  "ivana.benesova@woo.cz",
  "zuzana.bilkovska@woo.cz",
  "klouckova@confess.cz",
  "adam@yordstudio.cz",
  "jan.los@loreal.com",
  "tereza.law@loreal.com",
  "lukas.kratochvil1@tesco.com",
  "victoria.pearce@canda.com",
  "eva.van.elst@canda.com",
  "barbora.sulovska@cz.nestle.com",
  "denisa.zidekova@gmail.com",
  "nikolozb@meta.com",
  "tomas.hodbod@novatv.cz",
  "j.dostal93@gmail.com",
  "koukal@sportegy.cz",
  "anna.kaderavkova@gmail.com",
  "hejlovadenisa@gmail.com",
  "ivo@ivovesely.com",
  "barbora.milkova@peppermint.cz",
  "jacova@uol.cz",
  "michal.bubenicek@motion.cz",
  "marketing@marketbartova.cz",
  "twiigi@seznam.cz",
  "sammyjkeeler@gmail.com",
  "kristyna.sykorova@clovekvtisni.cz",
  "ivan.dzido@peopleinneed.net",
  "emacapkova77@seznam.cz",
  "vaclav.smolka@vlada.gov.cz",
  "simon.hauser@mam.cz",
  "nicola.tosnarova@woo.cz",
  "tomasjosef@me.com",
  "michaela.reichova@socialists.sk",
  "michal.tkadlec@krasno.cz",
  "katarina.vilemova@kreatorgroup.sk",
  "barbora.sklenarova@rozhlas.cz",
  "azappe@groupeseb.com",
  "kchrzova@groupeseb.com",
  "linhee.nguyenova@gmail.com",
  "knihy@madalbal.cz",
  "milanlukavec16@gmail.com",
  "monika.kmochova@penny.cz",
  "veronika.lebedova@newtonmedia.cz",
  "sukova@know.cz",
  "jana.vojackova@mattoni.cz",
  "hainam.nguyen@philips.com",
  "tatiana.bokrosova@loreal.com",
  "attila.izsak@loreal.com",
  "vera.albrechtova@loreal.com",
  "lucia.senkova@loreal.com",
  "yveta.lloyd@woo.cz",
  "backoffice@woo.cz",
  "adam@yordstudio.com",
  "dominik.roubinek@novatv.cz",
  "marketing@marketabartova.cz",
  "lucie.cepkova@beiersdorf.com",
  "nikola.skypalova@cz.nestle.com",
  "adela.bulantova@cz.nestle.com",
  "veronika.zednikova1@cz.nestle.com",
  "t.kalinova@cpihotels.com",
  "v.soucek@cpihotels.com",
  "jitka.zima@cans.cz",
  "katerina.hejclova@cans.com",
  "adriannebessogonov@gmail.com",
  "julian.tran@cncenter.cz",
  "jonas.macha@cncenter.cz",
  "monika@moniel.cz",
  "tereza.hajkova@adidas.com",
  "klaval@seznam.cz",
  "p_lomachenko@wargaming.cz",
  "klara.machova1@albert.cz",
  "denisa.kollarova@albert.cz",
  "elena.lindertova@asahibeer.cz",
  "martin.jezek@asahibeer.cz",
  "alexander.uher@asahibeer.cz",
  "dyntar@good-game.cz",
  "vogel@good-game.cz",
  "kristyna.antosikova@redheadmusic.cz",
  "dominika.opatrilova@storytlrs.cz",
  "katerina.zoubkova@subscribe.cz",
  "deni.hartmannova@gmail.com",
  "denis.forbrich@bigshock.cz",
  "daniel.stipek@seznam.cz",
  "tomas.kovarik@tzmo-global.com",
  "marketa.vystejnova@tzmo-global.com",
  "lucie.sladka@trueside.cz",
  "honza11novak@gmail.com",
  "katerina.zakova@groupm.com",
  "petra.kloidova@nova.cz",
  "tomas.nehasil@jaegermeister.cz",
  "matyas.kaiser@idnes.cz",
  "marek.pros@idnes.cz",
  "vojtech.vavrek@ocko.tv",
  "sebastian.shee@ocko.tv",
  "eliska.hercikova@ocko.tv",
  "petr.konecny@mafra.cz",
  "petr.banko@mafra.cz",
  "pavel.vondrasek@mafra.cz",
  "dominik.merrel@mafra.cz",
  "anna.andrlova@mafra.cz",
  "dominika.gregrova@ocko.tv",
  "katerina.mullerova@ocko.tv",
  "barbara.vavrova@iprima.cz",
  "martnovakova@csob.cz",
  "miduskova@csob.cz",
  "jana.nerusilova@sportvision.cz",
  "miroslav.mraz@sportivison.cz",
  "michaela.kostalkova@sportivison.cz",
  "anna.hemmerova@sportivision.cz",
  "karel.fojtik@sportvision.cz",
  "ratko.popovic@sportvision.rs",
  "barvanisova@gmail.com",
  "michaela@taneceksmuchou.com",
  "jan.molina@kaufland.cz",
  "tereza.buresova@kaufland.cz",
  "eliska.vranova@orbico.com",
  "katerina.kubatova@orbico.com",
  "liliia.yushko@smarty.cz",
  "dominika.mrazkova@smarty.cz",
  "veronika@ecomail.cz",
  "eva@ecomail.cz",
  "tereza@ecomail.cz",
  "eva.fryjaufova@alo.cz",
  "maria.kokindova@alo.cz",
];

export default function Page() {
  const [email, setEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    // Check localStorage on component mount
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail && ALLOWED_EMAILS.includes(storedEmail)) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (ALLOWED_EMAILS.includes(email)) {
      localStorage.setItem("userEmail", email);
      setIsAuthenticated(true);
    } else {
      alert("Invalid email");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    setEmail("");
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto flex max-w-7xl justify-between gap-4 px-[24px] pt-[140px]">
          <div className="invisible">Welcome! You are authenticated!</div>
          <div>
            <button
              onClick={handleLogout}
              className="rounded bg-[#F00065] px-4 py-2 text-white hover:bg-[#F00065]/80"
            >
              {t("logout")}
            </button>
          </div>
        </div>
        <Recording />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("zadejtemail")}
          className="rounded border border-[#22FFAF] bg-transparent p-2 text-white"
          required
        />
        <button
          type="submit"
          className="rounded border border-[#22FFAF] px-4 py-2 text-white hover:bg-[#22FFAF]/80"
        >
          {t("LoginPrihlasit")}
        </button>
      </form>
    </div>
  );
}
