import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { z } from "zod";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { trpc } from "../../utils/trpc";
import { Employee as EmployeeType } from "../../server/routers/employee";

type Props = {
  id: string;
};

const Employee: NextPage<Props> = ({ id }) => {
  const employee = trpc.employee.one.useQuery({ id });

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

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  try {
    const { id } = EmployeeType.pick({ id: true }).parse(params);

    return { props: { id } };
  } catch {
    return { redirect: { destination: "/employees", permanent: false } };
  }
};

export default Employee;
