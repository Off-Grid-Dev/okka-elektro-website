import Link from "next/link";
import styles from "./CTABanner.module.css";
import Wrapper from "../Wrapper/Wrapper";

export default function CTABanner() {
  return (
    <Wrapper>
      <section className={styles.banner}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Usikker på hva enheten din trenger?</h2>
          <p className={styles.sub}>
            Ta den med innom eller send oss en melding — vi feilsøker den gratis og gir deg et ærlig svar.
          </p>
        </div>
        <Link href="/kontakt" className={styles.cta}>
          ta kontakt →
        </Link>
      </section>
    </Wrapper>
  );
}
