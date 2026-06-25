import Link from "next/link";
import MobileMenu from "@components/MobileMenu";
import styles from "./Header.module.css";

const navLinks = [
  { label: "hjem", href: "/" },
  { label: "tjenester", href: "/tjenester" },
  { label: "kontakt", href: "/kontakt" },
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

      {/* Desktop nav — hidden on mobile via CSS */}
      <nav className={styles.nav} aria-label="Hovednavigasjon">
        {navLinks.map(({ label, href }) => (
          <Link key={href} href={href} className={styles.navLink}>
            {label}
          </Link>
        ))}
      </nav>

      {/* Desktop right — hidden on mobile via CSS */}
      <div className={styles.right}>
        <span className={styles.status} aria-label="Åpent nå">
          <span className={styles.statusDot} aria-hidden="true" />
          åpent nå
        </span>
        <Link href="/kontakt" className={styles.cta}>
          book reparasjon
        </Link>
      </div>

      {/* Mobile menu — hamburger + drawer, only visible on mobile */}
      <MobileMenu />

    </header>
  );
}
