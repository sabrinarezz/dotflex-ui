import Link from "next/link";
import styles from "./Footer.module.css";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* Left Side */}
        <div className={styles.brandSection}>

          <div className={styles.logo}>

            <div className={styles.logoCircle}>
              D
            </div>

            <h2>Dotflex.UI</h2>

          </div>

          <p className={styles.tagline}>
            Brands born among the stars.
            <br />
            Your identity,
            <br />
            launched from deep space.
          </p>

          <div className={styles.socials}>

            <Link href="#" className={styles.icon}>
              <FaTwitter />
            </Link>

            <Link href="#" className={styles.icon}>
              <FaLinkedinIn />
            </Link>

            <Link href="#" className={styles.icon}>
              <FaInstagram />
            </Link>

          </div>

        </div>

        {/* Services */}

        <div className={styles.column}>

          <h3>SERVICES</h3>

          <ul>

            <li><Link href="#">Brand Identity</Link></li>

            <li><Link href="#">AI Logo Studio</Link></li>

            <li><Link href="#">Business Cards</Link></li>

            <li><Link href="#">UI/UX Design</Link></li>

          </ul>

        </div>

        {/* Tools */}

        <div className={styles.column}>

          <h3>TOOLS</h3>

          <ul>

            <li><Link href="#">Name Generator</Link></li>

            <li><Link href="#">Logo Builder</Link></li>

            <li><Link href="#">Card Maker</Link></li>

            <li><Link href="#">UI Launchpad</Link></li>

          </ul>

        </div>

        {/* Company */}

        <div className={styles.column}>

          <h3>COMPANY</h3>

          <ul>

            <li><Link href="#">Process</Link></li>

            <li><Link href="#">Contact</Link></li>

            <li><Link href="#">Launch Orbit</Link></li>

            <li><Link href="#">Privacy Policy</Link></li>

          </ul>

        </div>

      </div>

      <div className={styles.bottom}></div>

    </footer>
  );
}
