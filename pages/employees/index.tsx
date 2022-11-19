import { NextPage } from "next";
import Link from "next/link";
import Card from "../../components/Card";
import Description from "../../components/Description";
import Grid from "../../components/Grid";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { trpc } from "../../utils/trpc";

const Employees: NextPage = () => {
  const employees = trpc.employee.all.useQuery();

  return (
    <Main>
      <Title>Employees</Title>

      <Description>
        <Link href="/">Home</Link>
      </Description>

      <Grid>
        {employees.data?.map((employee) => (
          <Card
            description={employee.title}
            href={`/employees/${employee.id}`}
            title={employee.name}
            key={employee.id}
          />
        ))}
      </Grid>
    </Main>
  );
};

export default Employees;
