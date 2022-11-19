import { FC, PropsWithChildren } from "react";
import styles from "./Code.module.css";

const Code: FC<PropsWithChildren> = ({ children }) => {
  return <code className={styles.code}> {children} </code>;
};

export default Code;
