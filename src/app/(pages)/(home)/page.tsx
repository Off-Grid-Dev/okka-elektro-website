import ShopTeaser from "@/components/ShopTeaser";
import styles from "./page.module.css";
import CTABanner from "@/components/CTABanner";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className={styles.divider} />
      <TrustSection />
      <hr className={styles.divider} />
      <Hero />
      <hr className={styles.divider} />
      <ShopTeaser />
      <CTABanner />
    </main>
  )
}
