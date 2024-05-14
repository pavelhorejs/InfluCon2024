import styles from "../gdpr/gdpr.module.scss";
const Page = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-40 md:mt-48 pb-14 px-3">
        <h2 className="pb-10">Soubory Cookies</h2>
        <p>
          Tyto Zásady cookies se vztahují na občany a osoby s trvalým pobytem v
          Evropském hospodářském prostoru. <br /> <br />
          <span className={styles.bold}>
            1. Úvod <br />
          </span>
          Naše webové stránky https://influcon.cz (dále jen „web“) používají
          cookies a další související technologie (pro usnadnění jsou všechny
          technologie označovány jako „cookies“). Cookies také vkládají třetí
          strany, které jsme zapojili. V níže uvedeném dokumentu vás informujeme
          o používání cookies na našem webu.{" "}
          <span className={styles.bold}>
            {" "}
            <br /> <br />
            2. Co jsou soubory cookies? <br />
          </span>
          Soubor cookie je malý jednoduchý soubor, který je odeslán spolu se
          stránkami tohoto webu a uložen prohlížečem na pevný disk počítače nebo
          jiného zařízení. Informace v nich uložené mohou být vráceny našim
          serverům nebo serverům příslušných třetích stran během následné
          návštěvy.
          <span className={styles.bold}>
            {" "}
            <br /> <br />
            3. Co jsou skripty? <br />
          </span>
          Skript je část programového kódu, který slouží k tomu, aby naše webové
          stránky fungovaly správně a interaktivně. Tento kód je spuštěn na
          našem serveru nebo na vašem zařízení. <br /> <br />
          <span className={styles.bold}>
            4. Co je to webový maják? <br />
          </span>
          Webový maják (nebo pixelová značka) je malý, neviditelný kus textu
          nebo obrázku na webu, který se používá ke sledování provozu na webu.
          Za tímto účelem jsou různá data o vás ukládána pomocí webových majáků.{" "}
          <br /> <br />
          <span className={styles.bold}>
            5. Cookies <br />
          </span>
          <span className={styles.bold}>
            5.1 Technické nebo funkční soubory cookies <br />
          </span>
          Některé soubory cookies zajišťují, že určité části webu fungují
          správně a že vaše uživatelské preference zůstávají známé. Umístěním
          funkčních souborů cookies usnadňujeme návštěvu našich webových
          stránek. Tímto způsobem nemusíte při návštěvě našich webových stránek
          opakovaně zadávat stejné informace a například položky zůstanou v
          nákupním košíku, dokud nezaplatíte. Tyto cookies můžeme umístit bez
          vašeho souhlasu. <br />
          <span className={styles.bold}>
            5.2 Statistické cookies <br />
          </span>
          Statistické soubory cookies využíváme k optimalizaci webových stránek
          pro naše uživatele. Díky těmto statistickým cookies získáváme přehled
          o používání našich webových stránek. <br />
          <span className={styles.bold}>
            5.3 Reklamní soubory cookies <br />
          </span>
          Reklamní soubory cookies, umožňují přizpůsobit reklamy a pomáhají
          získávat informace o výsledcích kampaně. To se děje na základě
          profilu, který vytvoříme na základě vašeho kliknutí a surfování na
          https://influcon.cz a mimo něj. S těmito cookies jste jako návštěvník
          webu spojeni s jedinečným ID, takže se stejná reklama například
          nezobrazuje více než jednou. <br />
          <span className={styles.bold}>
            5.4 Marketingové/Sledovací cookies{" "}
          </span>
          <br />
          Marketingové/sledovací cookies jsou soubory cookies nebo jakákoli jiná
          forma místního úložiště, které se používají k vytváření uživatelských
          profilů k zobrazování reklamy nebo ke sledování uživatele na tomto
          webu nebo na několika webech pro podobné marketingové účely. <br />{" "}
          Protože tyto soubory cookies jsou označeny jako sledovací, žádáme vás
          o jejich povolení. <br /> <br />
          <span className={styles.bold}>6. Umístěné cookies </span>
          <br /> Google Analytics (Statistické) <br /> Stripe (Funkční)
          <br /> <br />
          <span className={styles.bold}>
            7. Souhlas <br />
          </span>
          Když poprvé navštívíte náš web, ukážeme vám vyskakovací okno s
          vysvětlením o cookies. Jakmile kliknete na "Povolit", vyjadřujete svůj
          souhlas s používáním souborů cookies a doplňků popsaných v těchto
          Zásadách cookies. Používání cookies můžete zakázat pomocí svého
          prohlížeče, ale mějte na paměti, že naše webové stránky již nemusí
          fungovat správně. <br /> <br />
          <span className={styles.bold}>
            8. Povolení/zakázání a odstranění cookies
          </span>{" "}
          <br />
          Pomocí internetového prohlížeče můžete automaticky nebo ručně mazat
          soubory cookies. Můžete také určit, že některé soubory cookies nemusí
          být umístěny. Další možností je změnit nastavení internetového
          prohlížeče tak, aby se vám při každém uložení souboru cookies
          zobrazila zpráva. Další informace o těchto možnostech naleznete v
          Nápovědě vašeho prohlížeče. Vezměte prosím na vědomí, že náš web
          nemusí fungovat správně, pokud jsou deaktivovány všechny cookies.
          Pokud cookies smažete ve svém prohlížeči, budou znovu umístěny po
          vašem souhlasu, když znovu navštívíte naše webové stránky. <br />{" "}
          <br />
          <span className={styles.bold}>9. Kontatkní údaje</span> <br />
          V případě dotazů nebo komentářů ohledně našich zásad týkajících se
          souborů cookies a tohoto prohlášení nás prosím kontaktujte pomocí
          následujících kontaktních údajů:
          <br />
          <br />
          <a className="underline" href="mailto:info@woo.cz">
            info@woo.cz
          </a>
        </p>
      </div>
    </>
  );
};
export default Page;
