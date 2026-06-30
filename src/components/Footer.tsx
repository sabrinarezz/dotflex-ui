import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Left Section */}
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <div className={styles.logoCircle}>D</div>
            <span>Dotflex.UI</span>
          </div>

          <p className={styles.tagline}>
            Brands born among the stars.
            <br />
            Your identity,
            <br />
            launched from deep space.
          </p>

          <div className={styles.socialIcons}>
            <Link href="#" className={styles.socialBox}>
              tw
            </Link>

            <Link href="#" className={styles.socialBox}>
              in
            </Link>

            <Link href="#" className={styles.socialBox}>
              ig
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className={styles.footerColumn}>
          <h3>SERVICES</h3>

          <ul>
            <li>
              <Link href="#">Brand Identity</Link>
            </li>
            <li>
              <Link href="#">AI Logo Studio</Link>
            </li>
            <li>
              <Link href="#">Business Cards</Link>
            </li>
            <li>
              <Link href="#">UI/UX Design</Link>
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className={styles.footerColumn}>
          <h3>TOOLS</h3>

          <ul>
            <li>
              <Link href="#">Name Generator</Link>
            </li>
            <li>
              <Link href="#">Logo Builder</Link>
            </li>
            <li>
              <Link href="#">Card Maker</Link>
            </li>
            <li>
              <Link href="#">UI Launchpad</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className={styles.footerColumn}>
          <h3>COMPANY</h3>

          <ul>
            <li>
              <Link href="#">Process</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Launch Orbit</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}></div>
    </footer>
  );
}
