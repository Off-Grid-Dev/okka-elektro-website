import Link from "next/link";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.text}>
        <h2 className={styles.heading}>Not sure what your device needs?</h2>
        <p className={styles.sub}>
          Bring it in or send us a message — {`we'll`} diagnose it for free and
          give you a straight answer.
        </p>
      </div>
      <Link href="/contact" className={styles.cta}>
        get in touch →
      </Link>
    </section>
  );
}
