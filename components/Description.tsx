import { FC, PropsWithChildren } from "react";
import styles from "./Description.module.css";

const Description: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

export default Description;
