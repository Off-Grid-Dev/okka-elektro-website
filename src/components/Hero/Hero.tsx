import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.tag}>
        <span className={styles.tagDot} aria-hidden="true" />
        Egersund · Electronics repair &amp; sales
      </div>

      <h1 className={styles.heading}>
        We fix what others{" "}
        <span className={styles.headingAccent}>give up on.</span>
      </h1>

      <p className={styles.subheading}>
        Screen replacements, battery swaps, thermal paste, component upgrades —
        fast turnaround, transparent pricing, no jargon.
      </p>

      <div className={styles.actions}>
        <Link href="/shop" className={styles.btnPrimary}>
          browse the shop
        </Link>
        <Link href="/services" className={styles.btnGhost}>
          our services →
        </Link>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statVal}>48h</span>
          <span className={styles.statLabel}>avg. turnaround</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statVal}>500+</span>
          <span className={styles.statLabel}>repairs done</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statVal}>2yr</span>
          <span className={styles.statLabel}>parts warranty</span>
        </div>
      </div>
    </section>
  );
}
