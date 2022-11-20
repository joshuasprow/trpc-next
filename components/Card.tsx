import Link from "next/link";
import { FC } from "react";
import styles from "./Card.module.css";

type Props = {
  description: string;
  href: string;
  title: string;
};

const Card: FC<Props> = ({ description, href, title }) => {
  return (
    <Link href={href} className={styles.card}>
      <h2>
        <span>{title}</span>
        <span>&rarr;</span>
      </h2>
      <p>{description}</p>
    </Link>
  );
};

export default Card;
