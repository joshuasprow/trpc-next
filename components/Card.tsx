import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./Card.module.css";

type Props = {
  description: string;
  href: string;
  imageUrl?: string;
  title: string;
};

const Card: FC<Props> = ({ description, href, imageUrl, title }) => {
  return (
    <Link href={href} className={styles.card}>
      <figure>
        {imageUrl ? (
          <Image src={imageUrl} alt="Headshot" width={50} height={50} />
        ) : null}
        <h2>{title}</h2>
        <span>&rarr;</span>
      </figure>

      <p>{description}</p>
    </Link>
  );
};

export default Card;
