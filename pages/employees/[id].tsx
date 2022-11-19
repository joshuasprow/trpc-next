import { GetServerSideProps, NextPage } from "next";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { Employee as EmployeeType } from "../../server/routers/employee";
import { trpc } from "../../utils/trpc";

type Props = {
  id: string;
};

const Employee: NextPage<Props> = ({ id }) => {
  const employee = trpc.employee.one.useQuery({ id });

  return (
    <Main>
      <Title>{employee.data ? employee.data.name : "Loading..."}</Title>

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

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  try {
    const { id } = EmployeeType.pick({ id: true }).parse(params);

    return { props: { id } };
  } catch {
    return {
      redirect: { destination: "/employees", permanent: false },
    };
  }
};

export default Employee;
