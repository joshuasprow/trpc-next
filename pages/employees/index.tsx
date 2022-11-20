import { faker } from "@faker-js/faker";
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
  const create = trpc.employee.create.useMutation();

  return (
    <Main>
      <Title>Employees</Title>

      <Description>
        <Link href="/">Home</Link>
        <button
          onClick={() =>
            create.mutate({
              name: faker.name.fullName(),
              supervisor: faker.name.fullName(),
              title: faker.name.jobTitle(),
            })
          }
        >
          +
        </button>
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
