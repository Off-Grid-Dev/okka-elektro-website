import type { Metadata } from "next";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Personvern — Okka Elektro",
  description:
    "Okka Elektro samler ikke inn, lagrer eller selger personopplysninger. Ingen informasjonskapsler. Ingen sporing. Bare en nettside som fungerer.",
};

export default function PersonvernPage() {
  return (
    <main>
      <Wrapper>
        <article className={styles.page}>

          <header className={styles.intro}>
            <p className={styles.label}>{`// personvern`}</p>
            <h1 className={styles.heading}>Vi bryr oss ikke om dataen din.</h1>
            <p className={styles.lead}>
              Og vi mener det på den gode måten: vi samler den ikke inn, vi lagrer den ikke og vi selger den absolutt ikke.
            </p>
          </header>

          <section className={styles.section}>
            <div className={styles.highlight}>
              <p className={styles.highlightText}>
                Du har sikkert lagt merke til at det ikke dukket opp noen popup som ba deg godkjenne informasjonskapsler da du åpnet denne siden. Det var ikke en feil — vi bruker rett og slett ingen. Ingen sporing, ingen reklame, ingen tvilsom datainnsamling gjemt bak en «Godta alt»-knapp.
              </p>
              <p className={styles.highlightText}>
                Du er velkommen.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Informasjonskapsler (cookies)</h2>
            <p className={styles.body}>
              Denne nettsiden bruker ingen informasjonskapsler — verken funksjonelle, analytiske eller reklamerelaterte. Ingenting lagres i nettleseren din fra vårt hold.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Kontaktskjemaet</h2>
            <p className={styles.body}>
              Når du sender en melding via kontaktskjemaet, brukes opplysningene du oppgir — navn, e-postadresse, telefonnummer og beskrivelse av henvendelsen — utelukkende til å svare deg. Opplysningene lagres ikke i noen database. De behandles ikke av andre enn Resend, som fungerer som databehandler for videresending av e-post, og slettes automatisk etter utsendelse.
            </p>
            <p className={styles.body}>
              Meldingen sendes direkte til vår e-postkasse via Resend, en e-posttjeneste som er GDPR-kompatibel. Du kan lese mer om Resend sin personvernpolicy på{" "}
              <a href="https://resend.com/legal/privacy-policy" className={styles.link} target="_blank" rel="noopener noreferrer">
                resend.com
              </a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Sporing og analyse</h2>
            <p className={styles.body}>
              Vi bruker ingen analyseverktøy, ingen reklamenettverk og ingen innebygde tredjepartswidgets som sporer deg på tvers av nettsider. Ingen Google Analytics, ingen Meta Pixel, ingen skjulte skript.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Hosting</h2>
            <p className={styles.body}>
              Nettsiden driftes av Vercel. De kan logge teknisk informasjon som IP-adresse og nettlesertype som en del av standard serverlogging. Vercel er GDPR-kompatibel. Mer informasjon finner du på{" "}
              <a href="https://vercel.com/legal/privacy-policy" className={styles.link} target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Spørsmål?</h2>
            <p className={styles.body}>
              Har du spørsmål om personvern kan du ta kontakt på{" "}
              <a href="mailto:post@okkaelektro.no" className={styles.link}>
                post@okkaelektro.no
              </a>.
            </p>
          </section>

          <footer className={styles.meta}>
            <p className={styles.metaText}>Sist oppdatert: juni 2026</p>
          </footer>

        </article>
      </Wrapper>
    </main>
  );
}
