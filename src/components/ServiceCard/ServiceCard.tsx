"use client";

import type { Service } from "../ServiceGrid/services";
import styles from "./ServiceCard.module.css";

const icons: Record<Service["icon"], React.ReactNode> = {
  battery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="18" height="11" rx="2" />
      <path d="M20 11h2v3h-2" />
    </svg>
  ),
  screen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  thermal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
};

type Props = {
  service: Service;
  onClick: (service: Service) => void;
};

export default function ServiceCard({ service, onClick }: Props) {
  return (
    <button
      className={styles.card}
      onClick={() => onClick(service)}
      aria-haspopup="dialog"
      aria-label={`Les mer om ${service.title}`}
    >
      {/* Static border — hidden when electric border is active */}
      <span className={styles.cardBorder} aria-hidden="true" />

      <div className={styles.iconWrap}>
        {icons[service.icon]}
      </div>

      <span className={styles.tag}>{service.tag}</span>

      <h2 className={styles.title}>{service.title}</h2>

      <p className={styles.desc}>{service.desc}</p>

      <div className={styles.footer}>
        <span className={styles.price}>
          {service.details.find(d => d.label === "Startpris")?.val}
        </span>
        <span className={styles.more} aria-hidden="true">
          Les mer →
        </span>
      </div>
    </button>
  );
}
