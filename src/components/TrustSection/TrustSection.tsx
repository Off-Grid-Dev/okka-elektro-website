import styles from "./TrustSection.module.css";

const trustItems = [
  {
    icon: "ti-clock",
    title: "Fast turnaround",
    desc: "Most repairs done same day or within 48 hours.",
  },
  {
    icon: "ti-receipt",
    title: "Transparent pricing",
    desc: "You get a quote before we touch anything. No surprises.",
  },
  {
    icon: "ti-shield-check",
    title: "Parts warranty",
    desc: "All replacement parts covered for 2 years.",
  },
  {
    icon: "ti-tools",
    title: "Board-level skill",
    desc: "We go deeper than most — soldering, diagnostics, microsoldering.",
  },
];

export default function TrustSection() {
  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>\// why okka elektro</p>
      <div className={styles.grid}>
        {trustItems.map(({ icon, title, desc }) => (
          <div key={title} className={styles.card}>
            <i className={`ti ${icon} ${styles.icon}`} aria-hidden="true" />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
