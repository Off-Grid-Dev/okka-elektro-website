import Link from "next/link";
import Image from "next/image";
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
          <Image
            src="./nerd-favicon.svg"
            alt="nerd icon"
            width={44}
            height={44}
          />
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
