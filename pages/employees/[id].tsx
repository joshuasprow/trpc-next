import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Description from "../../components/Description";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { trpc } from "../../utils/trpc";

const Employee: NextPage = () => {
  const id = useRouter().query.id as string;
  const employee = trpc.employee.one.useQuery({ id });

  return (
    <Main>
      <Title>{employee.data ? employee.data.name : "Loading..."}</Title>

      <Description>
        <Link href="/">Home</Link>
        <Link href="/employees">Employees</Link>
      </Description>

      {employee.data ? (
        <ul>
          <li>ID: {employee.data.id}</li>
          <li>Title: {employee.data.title}</li>
          <li>Supervisor: {employee.data.supervisor}</li>
        </ul>
      ) : null}
    </Main>
  );
};

export default Employee;
