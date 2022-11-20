import { faker } from "@faker-js/faker";
import { writeFile } from "fs/promises";
import { join } from "path";
import { z } from "zod";
import { procedure, router } from "../trpc";

export const Employee = z.object({
  id: z.string().uuid(),
  name: z.string(),
  title: z.string(),
  supervisor: z.string(),
});
export type Employee = z.infer<typeof Employee>;

const getEmployees = async () => {
  const { default: employees } = await import("../../tmp/employees.json");

  return employees;
};

export const employeeRouter = router({
  findMany: procedure.query(async () => {
    const employees = await getEmployees();

    return employees;
  }),
  find: procedure
    .input(Employee.pick({ id: true }))
    .query(async ({ input }) => {
      const employees = await getEmployees();
      const employee = employees.find((employee) => employee.id === input.id);

      return employee || null;
    }),
  create: procedure
    .input(Employee.omit({ id: true }))
    .mutation(async ({ input }) => {
      const employees = await getEmployees();
      const employee = { ...input, id: faker.datatype.uuid() };

      employees.push(employee);

      await writeFile(join("tmp", "employees.json"), JSON.stringify(employees));

      return employee;
    }),
});
