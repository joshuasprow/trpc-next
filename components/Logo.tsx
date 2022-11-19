import { FC } from "react";
import styles from "./Logo.module.css";
import Image from "next/image";

type Props = {
  alt: string;
  src: string;
};

const Logo: FC<Props> = ({ alt, src }) => {
  return (
    <span className={styles.logo}>
      <Image src={src} alt={alt} width={72} height={16} />
    </span>
  );
};

export default Logo;
