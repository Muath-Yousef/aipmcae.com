import Link from "next/link";
import styles from "./ServiceCard.module.css";

interface Props {
  icon: string;
  title: string;
  description: string;
  href: string;
  lang?: string;
  className?: string;
}

export default function ServiceCard({ icon, title, description, href, lang = "ar", className = "" }: Props) {
  const isAr = lang === "ar";
  const isImage = icon.startsWith("/");
  return (
    <Link href={href} className={`card-premium ${styles.card} ${className}`}>
      <span className={styles.icon}>
        {isImage ? <img src={icon} alt={title} className={styles.iconImg} /> : icon}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.arrow}>{isAr ? "←" : "→"}</span>
    </Link>
  );
}
