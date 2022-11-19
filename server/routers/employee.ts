import { z } from "zod";
import { procedure, router } from "../trpc";
import { faker } from "@faker-js/faker";

export const Employee = z.object({
  name: z.string(),
  title: z.string(),
  supervisor: z.string(),
});
export type Employee = z.infer<typeof Employee>;

const boss: Employee = {
  name: faker.helpers.unique(faker.name.fullName),
  title: "Boss",
  supervisor: "",
};
const employees: Employee[] = [boss];

const getRandomIndex = (max: number) => {
  const random = Math.random();

  if (random < 0.1) return 0; // the boss is always the first employee

  return Math.floor(random * max);
};

for (let index = 0; index < 20; index++) {
  const supervisor = employees[getRandomIndex(employees.length)];

  employees.push({
    name: faker.helpers.unique(faker.name.fullName),
    title: faker.name.jobTitle(),
    supervisor: supervisor.name,
  });
}

export const employeeRouter = router({
  all: procedure.query(() => {
    return employees;
  }),
  one: procedure.input(z.object({ name: z.string() })).query(({ input }) => {
    const employee = employees.find((employee) => employee.name === input.name);

    return employee || null;
  }),
});
