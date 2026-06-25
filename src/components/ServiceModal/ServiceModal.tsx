"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Service } from "../ServiceGrid/services";
import styles from "./ServiceModal.module.css";

type Props = {
  service: Service | null;
  onClose: () => void;
};

export default function ServiceModal({ service, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const open = service !== null;

  // Focus the close button when modal opens
  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
      onClick={handleBackdropClick}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      aria-describedby="service-modal-desc"
    >
      <div className={`${styles.modal} ${open ? styles.modalOpen : ""}`}>

        <button
          ref={closeBtnRef}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Lukk"
        >
          ✕
        </button>

        {service && (
          <>
            <span className={styles.tag}>{service.tag}</span>

            <h2 className={styles.title} id="service-modal-title">
              {service.title}
            </h2>

            <p className={styles.desc} id="service-modal-desc">
              {service.fullDesc}
            </p>

            <dl className={styles.details}>
              {service.details.map(({ label, val }) => (
                <div key={label} className={styles.detailRow}>
                  <dt className={styles.detailLabel}>{label}</dt>
                  <dd className={styles.detailVal}>{val}</dd>
                </div>
              ))}
            </dl>

            <div className={styles.actions}>
              <Link href="/kontakt" className={styles.btnPrimary}>
                Book denne tjenesten
              </Link>
              <button className={styles.btnSecondary} onClick={onClose}>
                Lukk
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
