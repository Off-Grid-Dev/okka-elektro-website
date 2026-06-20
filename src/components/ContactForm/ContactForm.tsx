"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ContactForm.module.css";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const mountTime = useRef<number>(0);

  useEffect(() => {
    mountTime.current = Date.now();
  }, []);

  async function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check — bots fill hidden fields, humans don't
    if (data.get("_trap")) {
      setState("success"); // silently discard
      return;
    }

    // Timing check — reject submissions under 3 seconds
    const elapsed = Date.now() - mountTime.current;
    if (elapsed < 3000) {
      setState("success"); // silently discard
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          navn: data.get("navn"),
          epost: data.get("epost"),
          telefon: data.get("telefon"),
          enhet: data.get("enhet"),
          melding: data.get("melding"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Noe gikk galt");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Noe gikk galt. Prøv igjen.");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="navn" className={styles.label}>Navn</label>
          <input
            type="text"
            id="navn"
            name="navn"
            placeholder="Ola Nordmann"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="telefon" className={styles.label}>Telefon</label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            placeholder="+47 000 00 000"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="epost" className={styles.label}>E-post</label>
        <input
          type="email"
          id="epost"
          name="epost"
          placeholder="ola@eksempel.no"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="enhet" className={styles.label}>Enhet</label>
        <input
          type="text"
          id="enhet"
          name="enhet"
          placeholder="f.eks. iPhone 14, MacBook Pro 2021, Samsung Galaxy S23"
          className={styles.input}
        />
        <span className={styles.hint}>{`// modell og år hjelper oss å forberede oss`}</span>
      </div>

      <div className={styles.field}>
        <label htmlFor="melding" className={styles.label}>Melding</label>
        <textarea
          id="melding"
          name="melding"
          placeholder="Beskriv problemet så godt du kan — hva skjedde, når det startet, osv."
          required
          className={styles.textarea}
        />
      </div>

      {/* Honeypot — hidden from real users, bots fill it in */}
      <div className={styles.honeypot} aria-hidden="true">
        <input
          type="text"
          name="_trap"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.footer}>
        <button
          type="submit"
          className={styles.btn}
          disabled={state === "loading"}
        >
          {state === "loading" ? "Sender..." : "Send henvendelse →"}
        </button>
        <p className={styles.privacy}>
          Vi deler aldri informasjonen din med tredjeparter.
        </p>
      </div>

      {state === "success" && (
        <p className={styles.successMsg}>
          ✓ Takk! Vi svarer deg så snart som mulig.
        </p>
      )}

      {state === "error" && (
        <p className={styles.errorMsg}>
          ✗ {errorMsg}
        </p>
      )}

    </form>
  );
}
