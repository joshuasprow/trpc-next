import { NextPage } from "next";
import Link from "next/link";
import Description from "../../components/Description";
import Title from "../../components/Title";
import { trpc } from "../../utils/trpc";
import styles from "../index.module.css";

const Employees: NextPage = () => {
  const employees = trpc.employee.all.useQuery();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Title>Employees</Title>

        <Description>
          <Link href="/">Home</Link>
        </Description>

        <div className={styles.grid}>
          {employees.data?.map((employee) => (
            <Link
              href={`/employees/${employee.name}`}
              className={styles.card}
              key={employee.name}
            >
              <h2>{employee.name} &rarr;</h2>
              <p>{employee.title}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Employees;
