import { FC, PropsWithChildren } from "react";
import styles from "./Grid.module.css";

const Grid: FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles.grid}>{children}</section>;
};

export default Grid;
