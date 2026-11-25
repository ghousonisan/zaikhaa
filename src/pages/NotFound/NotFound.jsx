import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.text}>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className={styles.cta}>
        Back to Home
      </Link>
    </div>
  );
}
