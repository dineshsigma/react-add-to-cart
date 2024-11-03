import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          target="_blank"
          className={styles.link}
        >
          Frontend Mentor
        </a>
      </span>
      <span className={styles.divider}>│</span>
      <span>
        Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/josh76543210"
          target="_blank"
          className={styles.link}
        >
          josh76543210
        </a>
      </span>
    </footer>
  );
}

export default Footer;
