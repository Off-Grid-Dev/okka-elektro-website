import type { Metadata } from "next";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Om oss — Okka Elektro",
  description:
    "Okka Elektro er en lokal, uavhengig reparasjonstjeneste i Egersund. Vi hjelper deg med å reparere og oppgradere elektronikken din fremfor å kjøpe nytt.",
};

export default function OmOssPage() {
  return (
    <main>
      <Wrapper>
        <article className={styles.page}>

          <header className={styles.intro}>
            <p className={styles.label}>{`// om oss`}</p>
            <h1 className={styles.heading}>Én person. Én skrutrekker. Godt humør.</h1>
            <p className={styles.lead}>
              Okka Elektro er ikke et stort selskap med et fancy kontor og en resepsjonist. Det er meg — en lokal, hobbypreget reparatør i Egersund som liker å fikse ting fremfor å kaste dem.
            </p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Hvorfor reparasjon?</h2>
            <p className={styles.body}>
              Elektronikk er dyrt. Og det å kjøpe nytt hver gang noe slutter å virke er ikke bare kostbart — det er sløsing. En telefon med et slitt batteri er ikke en dårlig telefon. Den er bare en telefon som trenger et nytt batteri.
            </p>
            <p className={styles.body}>
              Jeg startet Okka Elektro fordi jeg tror vi alle kan spare en god del penger — og gjøre noe fornuftig for miljøet — ved å bruke det vi har litt lenger. Et nytt batteri koster en brøkdel av en ny telefon. En ny skjerm er langt billigere enn et nytt nettbrett. Og en god runde med kjølepasta og støvfjerning kan gi PC-en din et nytt liv.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Hva jeg gjør</h2>
            <p className={styles.body}>
              Jeg gjør enkle, men effektive reparasjoner: batteribytte, skjermbytte, kjølepasta og rengjøring av bærbare og stasjonære, og komponentoppgraderinger som ny SSD eller mer RAM. Ingen avansert brettloddting — bare solid, pålitelig håndverk på det jeg vet jeg kan gjøre ordentlig.
            </p>
            <p className={styles.body}>
              Jeg jobber fra hjemmeverkstedet mitt i Egersund. Det betyr at du slipper å betale for et fancy lokale — og det betyr også at jeg har tid til å snakke med deg, forklare hva som er galt og gi deg et ærlig svar på om det er verdt å reparere.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Ærlighet fremfor alt</h2>
            <p className={styles.body}>
              Hvis reparasjonen ikke er verdt prisen, sier jeg det. Hvis jeg ikke kan fikse noe — enten fordi det er utenfor min kompetanse eller fordi enheten rett og slett er for skadet — er det bedre at du vet det med én gang fremfor at du bruker penger på ingenting.
            </p>
            <p className={styles.body}>
              Dette er en liten, enkel operasjon. Ingen store garantier, ingen forsikringsselskaper i ryggen — bare en person som gjør jobben sin skikkelig og behandler enhetene dine med respekt.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Ta kontakt</h2>
            <p className={styles.body}>
              Lurer du på om noe kan repareres? Send meg en melding — det koster ingenting å spørre, og feilsøking er alltid gratis.
            </p>
          </section>

        </article>
      </Wrapper>
    </main>
  );
}
