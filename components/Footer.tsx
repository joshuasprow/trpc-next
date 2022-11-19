import { FC } from "react";
import styles from "./Footer.module.css";
import Logo from "./Logo";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <Logo src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>
  );
};

export default Footer;
