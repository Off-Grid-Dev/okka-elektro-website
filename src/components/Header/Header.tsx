import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { label: "services", href: "/services" },
  { label: "shop", href: "/shop" },
  { label: "repairs", href: "/repairs" },
  { label: "contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>

      <Link href="/" className={styles.logo}>
        <div className={styles.logoMark}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="var(--color-volt-900)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="9" cy="9" r="2.5" stroke="var(--color-volt-900)" strokeWidth="1.5" />
          </svg>
        </div>
        <span className={styles.logoText}>
          okka<span className={styles.logoAccent}>_</span>elektro
        </span>
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        {navLinks.map(({ label, href }) => (
          <Link key={href} href={href} className={styles.navLink}>
            {label}
          </Link>
        ))}
      </nav>

      <div className={styles.right}>
        <span className={styles.status} aria-label="Currently open">
          <span className={styles.statusDot} aria-hidden="true" />
          open now
        </span>
        <Link href="/repairs/book" className={styles.cta}>
          book repair
        </Link>
      </div>

    </header>
  );
}
