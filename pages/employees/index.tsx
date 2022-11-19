import { NextPage } from "next";
import Link from "next/link";
import Card from "../../components/Card";
import Description from "../../components/Description";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { trpc } from "../../utils/trpc";
import styles from "../index.module.css";

const Employees: NextPage = () => {
  const employees = trpc.employee.all.useQuery();

  return (
    <Main>
      <Title>Employees</Title>

      <Description>
        <Link href="/">Home</Link>
      </Description>

      <div className={styles.grid}>
        {employees.data?.map((employee) => (
          <Card
            description={employee.title}
            href={`/employees/${employee.name}`}
            title={employee.name}
            key={employee.name}
          />
        ))}
      </div>
    </Main>
  );
};

export default Employees;
