import type { Metadata } from "next";
import ContactForm from "@components/ContactForm";
import Wrapper from "@components/Wrapper/Wrapper";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kontakt oss — Okka Elektro",
  description: "Ta kontakt med Okka Elektro for reparasjon, spørsmål eller tilbud.",
};

export default function KontaktPage() {
  return (
    <main>
      <Wrapper>
        <div className={styles.page}>
          <div className={styles.intro}>
            <p className={styles.label}>{`// kontakt`}</p>
            <h1 className={styles.heading}>Ta kontakt med oss</h1>
            <p className={styles.sub}>
              Fyll ut skjemaet så svarer vi deg så snart som mulig — vanligvis samme dag.
            </p>
          </div>
          <ContactForm />
        </div>
      </Wrapper>
    </main>
  );
}
