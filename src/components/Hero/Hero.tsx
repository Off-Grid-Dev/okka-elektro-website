import Link from "next/link";
import styles from "./Hero.module.css";
import Wrapper from "../Wrapper/Wrapper";

export default function Hero() {
  return (
    <Wrapper>
      <section className={styles.hero}>
        <div className={styles.tag}>
          <span className={styles.tagDot} aria-hidden="true" />
          Egersund · Elektronikk service &amp; salg
        </div>

        <h1 className={styles.heading}>
          Smartere forbruk:{" "}
          <span className={styles.headingAccent}><br />reparasjon fremfor nykjøp.</span>
        </h1>

        <p className={styles.subheading}>
          Utskifting av skjerm og batteri, ny kjølepasta, komponentoppgradering — rask behandlingstid, tydelige priser, ingen teknobabbel.
        </p>

        <div className={styles.actions}>
          <Link href="/services" className={styles.btnGhost}>
            våre tjenester →
          </Link>
        </div>

      </section>
    </Wrapper>
  );
}
