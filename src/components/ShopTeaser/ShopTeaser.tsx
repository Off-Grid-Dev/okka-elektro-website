import Link from "next/link";
import styles from "./ShopTeaser.module.css";

// Replace with real data fetched from your shop/CMS later
const featuredProducts = [
  {
    id: "iphone-14-screen",
    icon: "ti-device-mobile",
    name: "iPhone 14 Screen",
    sub: "OEM · OLED · incl. tools",
    price: "kr 899",
    href: "/shop/iphone-14-screen",
  },
  {
    id: "macbook-pro-battery",
    icon: "ti-battery",
    name: "MacBook Pro Battery",
    sub: "A2338 · 58.2Wh · OEM grade",
    price: "kr 1 199",
    href: "/shop/macbook-pro-battery",
  },
  {
    id: "samsung-970-evo",
    icon: "ti-cpu",
    name: "Samsung 970 EVO 1TB",
    sub: "NVMe M.2 · 3500MB/s read",
    price: "kr 749",
    href: "/shop/samsung-970-evo",
  },
];

export default function ShopTeaser() {
  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>\// shop</p>

      <div className={styles.grid}>
        {featuredProducts.map(({ id, icon, name, sub, price, href }) => (
          <div key={id} className={styles.card}>
            <div className={styles.imgPlaceholder} aria-hidden="true">
              <i className={`ti ${icon}`} />
            </div>
            <div className={styles.body}>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.sub}>{sub}</p>
              <div className={styles.footer}>
                <span className={styles.price}>{price}</span>
                <Link href={href} className={styles.addBtn}>
                  add to cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <Link href="/shop" className={styles.viewAllBtn}>
          view all products →
        </Link>
      </div>
    </section>
  );
}
