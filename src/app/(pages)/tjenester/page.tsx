import type { Metadata } from "next";
import Wrapper from "@/components/Wrapper/Wrapper";
import ServicesGrid from "@/components/ServiceGrid/ServiceGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Tjenester — Okka Elektro",
  description:
    "Se alle tjenestene vi tilbyr — batteribytte, skjermbytte, kjølepasta og mer. Rask behandlingstid og 2 års garanti på deler.",
};

export default function TjenesterPage() {
  return (
    <main>
      <Wrapper>
        <div className={styles.page}>
          <div className={styles.intro}>
            <p className={styles.label}>{`// tjenester`}</p>
            <h1 className={styles.heading}>Det vi gjør best.</h1>
            <p className={styles.sub}>
              Velg en tjeneste for å lese mer om hva som inngår, hva det koster og hvor lang tid det tar.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </Wrapper>
    </main>
  );
}
