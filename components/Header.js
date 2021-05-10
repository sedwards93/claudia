import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>CLAUDIA LEE</a>
        </Link>
      </div>
      <nav>
        <ul>
          {/* <Link href="/about">
            <a>ABOUT</a>
          </Link> */}
          <Link href="/work">
            <a>WORK</a>
          </Link>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
