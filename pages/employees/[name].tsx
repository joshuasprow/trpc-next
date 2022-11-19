import { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const Employee: NextPage = () => {
  const { query } = useRouter();
  const employee = trpc.employee.one.useQuery({ name: `${query.name}` });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Employee</h1>

        {employee.data ? (
          <ul>
            <li>Name: {employee.data.name}</li>
            <li>Title: {employee.data.title}</li>
            <li>Supervisor: {employee.data.supervisor}</li>
          </ul>
        ) : (
          "Loading..."
        )}
      </main>
    </div>
  );
};

export default Employee;
