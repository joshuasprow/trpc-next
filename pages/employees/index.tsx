import { NextPage } from "next";
import styles from "../../styles/Home.module.css";

const Employees: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Employees</h1>
      </main>
    </div>
  );
};

export default Employees;
