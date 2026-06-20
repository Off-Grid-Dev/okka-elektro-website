import styles from "./page.module.css";
import CTABanner from "@/components/CTABanner";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className={styles.divider} />
      <CTABanner />
    </main>
  )
}
