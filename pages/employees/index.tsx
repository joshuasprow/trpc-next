import { faker } from "@faker-js/faker";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Description from "../../components/Description";
import Grid from "../../components/Grid";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { trpc } from "../../utils/trpc";

const Employees: NextPage = () => {
  const employees = trpc.employee.all.useQuery();
  const create = trpc.employee.create.useMutation();

  const [supervisor, setSupervisor] = useState<undefined | string>();

  const handleSupervisorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSupervisor(e.target.value);
  };

  const handleCreate = async () => {
    if (!supervisor) {
      console.error("No supervisor selected");
      return;
    }

    await create.mutateAsync({
      name: faker.name.fullName(),
      title: faker.name.jobTitle(),
      supervisor,
    });

    await employees.refetch();
  };

  useEffect(() => {
    let loaded = false;

    if (loaded === false && employees.data) {
      loaded = true;

      setSupervisor(employees.data[0].name);
    }
  }, [employees.data]);

  return (
    <Main>
      <Title>Employees</Title>

      <Description>
        <Link href="/">Home</Link>
      </Description>

      <Description>
        <select onChange={handleSupervisorChange} value={supervisor}>
          {employees.data?.map((employee) => (
            <option key={employee.id} value={employee.name}>
              {employee.name} ({employee.title})
            </option>
          ))}
        </select>

        <button onClick={handleCreate}>+</button>
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
