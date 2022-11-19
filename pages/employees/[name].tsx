import { NextPage } from "next";
import { useRouter } from "next/router";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { trpc } from "../../utils/trpc";

const Employee: NextPage = () => {
  const { query } = useRouter();
  const employee = trpc.employee.one.useQuery({ name: `${query.name}` });

  return (
    <Main>
      <Title>Employee</Title>

      {employee.data ? (
        <ul>
          <li>Name: {employee.data.name}</li>
          <li>Title: {employee.data.title}</li>
          <li>Supervisor: {employee.data.supervisor}</li>
        </ul>
      ) : (
        "Loading..."
      )}
    </Main>
  );
};

export default Employee;
