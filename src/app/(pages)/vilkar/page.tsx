import type { Metadata } from "next";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vilkår — Okka Elektro",
  description:
    "Vilkår og betingelser for reparasjonstjenester hos Okka Elektro. Les om garanti, ansvar og hva du kan forvente.",
};

export default function VilkarPage() {
  return (
    <main>
      <Wrapper>
        <article className={styles.page}>

          <header className={styles.intro}>
            <p className={styles.label}>{`// vilkår`}</p>
            <h1 className={styles.heading}>Klare vilkår. Ingen overraskelser.</h1>
            <p className={styles.lead}>
              Okka Elektro er en liten, privat reparasjonstjeneste. Her er hva du kan forvente — og hva du bør vite — før du leverer inn enheten din.
            </p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Gratis feilsøking</h2>
            <p className={styles.body}>
              Feilsøking er alltid gratis. Du betaler ingenting for å få enheten vurdert. Når feilsøkingen er ferdig, får du et klart pristilbud før det utføres noe arbeid. Du bestemmer selv om du ønsker å gå videre.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Betaling</h2>
            <p className={styles.body}>
              Betaling skjer etter at reparasjonen er fullført og du har fått demonstrert at enheten fungerer som forventet. Vi aksepterer Vipps og kontant. Faktura kan avtales for faste kunder.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Garanti på arbeid og deler</h2>
            <p className={styles.body}>
              Vi stiller garanti på det arbeidet vi utfører:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listLabel}>Deler</span>
                Alle utskiftede deler har 2 års garanti mot fabrikasjonsfeil, med unntak av batterier fra tredjepartsleverandører som har 1 års garanti.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listLabel}>Arbeid</span>
                Vi garanterer at reparasjonen er utført faglig forsvarlig. Dersom samme feil oppstår igjen innen 90 dager som følge av reparasjonen, fikser vi det uten ekstra kostnad.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listLabel}>Unntak</span>
                Garantien gjelder ikke skader som skyldes fall, væskeskade, uautoriserte inngrep fra tredjepart, eller normal slitasje etter reparasjonen.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Ansvarsbegrensning</h2>
            <p className={styles.body}>
              Okka Elektro er en enkeltpersonsdrevet tjeneste uten bedriftsforsikring for reparasjonsfeil. Vi tar alle forholdsregler og behandler enhetene dine med største forsiktighet — men i det usannsynlige tilfellet at noe går galt under reparasjonen, er vår erstatningsplikt begrenset til verdien av de delene som ble brukt under reparasjonen.
            </p>
            <p className={styles.body}>
              Vi anbefaler at du tar sikkerhetskopi av data på enheten din før du leverer den inn. Okka Elektro er ikke ansvarlig for tap av data.
            </p>
            <p className={styles.body}>
              Reparasjoner utføres på eierens ansvar. Dersom en enhet er skadet utover reparasjon, vil dette bli kommunisert tydelig — og du vil aldri bli belastet for arbeid som ikke lar seg fullføre.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Henting og levering</h2>
            <p className={styles.body}>
              Vi tilbyr ikke henting eller levering. Enheten leveres og hentes av kunden, etter avtale. Dersom en enhet ikke er hentet innen 30 dager etter varsling om ferdig reparasjon, forbeholder vi oss retten til å deponere enheten.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Reparasjoner vi avslår</h2>
            <p className={styles.body}>
              Vi forbeholder oss retten til å avslå reparasjoner vi vurderer som utenfor vår kompetanse, eller der risikoen for ytterligere skade er for høy. I slike tilfeller vil vi gi deg en ærlig anbefaling om hvem som kan hjelpe deg videre.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Spørsmål</h2>
            <p className={styles.body}>
              Lurer du på noe rundt vilkårene? Ta kontakt på{" "}
              <a href="mailto:post@okkaelektro.no" className={styles.link}>
                post@okkaelektro.no
              </a>{" "}
              — vi svarer alltid.
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
