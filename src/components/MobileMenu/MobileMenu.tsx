"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";

const navLinks = [
  { label: "tjenester", href: "/tjenester" },
  { label: "kontakt", href: "/kontakt" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Personvern", href: "/personvern" },
  { label: "Vilkår", href: "/vilkar" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() { setOpen(false); }

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setOpen(true)}
        aria-label="Åpne meny"
        aria-expanded={open}
        aria-controls="mobile-drawer"
      >
        <span /><span /><span />
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-label="Mobilmeny"
        aria-hidden={!open}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLogo}>
            okka<span className={styles.drawerLogoAccent}>_</span>elektro
          </span>
          <button
            className={styles.closeBtn}
            onClick={close}
            aria-label="Lukk meny"
          >
            ✕
          </button>
        </div>

        <div className={styles.drawerNav}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={styles.drawerLink}
              onClick={close}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link href="/kontakt" className={styles.drawerCta} onClick={close}>
          book reparasjon →
        </Link>

        <div className={styles.drawerStatus}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span>åpent nå</span>
        </div>
      </nav>
    </>
  );
}
