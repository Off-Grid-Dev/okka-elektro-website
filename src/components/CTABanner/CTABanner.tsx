import Link from "next/link";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.text}>
        <h2 className={styles.heading}>Usikker på hva enheten din trenger?</h2>
        <p className={styles.sub}>
          Ta den med innom eller send oss en melding — vi feilsøker den gratis og gir deg et ærlig svar.
        </p>
      </div>
      <Link href="/contact" className={styles.cta}>
        get in touch →
      </Link>
    </section>
  );
}
