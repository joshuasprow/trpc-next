import { FC, PropsWithChildren } from "react";
import styles from "./Main.module.css";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
