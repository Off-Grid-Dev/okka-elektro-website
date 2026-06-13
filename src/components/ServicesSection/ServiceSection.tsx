import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: "ti-device-laptop",
    title: "Screen replacement",
    desc: "Laptops, phones, tablets. OEM-quality panels, colour-calibrated.",
    tags: ["phones", "laptops", "tablets"],
  },
  {
    icon: "ti-battery-charging",
    title: "Battery replacement",
    desc: "Restore full capacity. We test cycle health before and after.",
    tags: ["phones", "laptops", "tablets"],
  },
  {
    icon: "ti-cpu",
    title: "Component upgrades",
    desc: "RAM, SSD, GPU swaps. We source the right parts for your machine.",
    tags: ["desktops", "laptops"],
  },
  {
    icon: "ti-temperature",
    title: "Thermal paste & cleaning",
    desc: "Running hot? A repaste and dust clean can drop temps by 20°C+.",
    tags: ["desktops", "laptops"],
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>\// services</p>
      <div className={styles.grid}>
        {services.map(({ icon, title, desc, tags }) => (
          <div key={title} className={styles.card}>
            <div className={styles.iconWrap}>
              <i className={`ti ${icon} ${styles.icon}`} aria-hidden="true" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{desc}</p>
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
