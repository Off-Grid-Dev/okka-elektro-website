import Link from "next/link";
import styles from "./Footer.module.css";
import Wrapper from "../Wrapper/Wrapper";

const navLinks = [
  { label: "Tjenester", href: "/tjenester" },
  // { label: "Reparasjoner", href: "/reparasjoner" },
  // { label: "Butikk", href: "/butikk" },
  { label: "Kontakt", href: "/kontakt" },
];

const infoLinks = [
  { label: "Om oss", href: "/om-oss" },
  { label: "Personvern", href: "/personvern" },
  { label: "Vilkår", href: "/vilkar" },
];

const openingHours = [
  { day: "Man–fre", time: "09:00–17:00" },
  { day: "Lørdag", time: "10:00–14:00" },
  { day: "Søndag", time: "Stengt" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.top}>

          {/* LEFT — contact */}
          <div className={styles.contact}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoMark}>
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="var(--color-volt-900)" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="9" cy="9" r="2.5" stroke="var(--color-volt-900)" strokeWidth="1.5" />
                </svg>
              </div>
              <span className={styles.logoText}>
                okka<span className={styles.logoAccent}>_</span>elektro
              </span>
            </Link>

            <dl className={styles.contactItems}>

              <div className={styles.contactItem}>
                <dt className={styles.contactLabel}>Telefon</dt>
                <dd className={styles.contactValue}>
                  <a href="tel:+4793912356">+47 93 91 23 56</a>
                </dd>
              </div>

              <div className={styles.contactItem}>
                <dt className={styles.contactLabel}>E-post</dt>
                <dd className={styles.contactValue}>
                  <a href="mailto:post@okkaelektro.no">post@okkaelektro.no</a>
                </dd>
              </div>

              <div className={styles.contactItem}>
                <dt className={styles.contactLabel}>Åpningstider</dt>
                <dd className={styles.contactValue}>
                  <dl className={styles.hours}>
                    {openingHours.map(({ day, time }) => (
                      <div key={day} className={styles.hoursRow}>
                        <dt className={styles.hoursDay}>{day}</dt>
                        <dd className={styles.hoursTime}>{time}</dd>
                      </div>
                    ))}
                  </dl>
                </dd>
              </div>
            </dl>
          </div>

          {/* RIGHT — links */}
          <div className={styles.linksBlock}>
            <div className={styles.linkGroup}>
              <span className={styles.linkGroupTitle}>Navigasjon</span>
              {navLinks.map(({ label, href }) => (
                <Link key={href} href={href} className={styles.link}>
                  {label}
                </Link>
              ))}
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.linkGroupTitle}>Informasjon</span>
              {infoLinks.map(({ label, href }) => (
                <Link key={href} href={href} className={styles.link}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Okka Elektro — Alle rettigheter forbeholdt
          </span>
          <span className={styles.org}>Org.nr. 123 456 789</span>
        </div>
      </Wrapper>
    </footer>
  );
}
