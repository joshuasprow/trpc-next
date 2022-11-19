import { z } from "zod";
import { procedure, router } from "../trpc";
import employees from "./employees.json";

export const Employee = z.object({
  name: z.string(),
  title: z.string(),
  supervisor: z.string(),
});
export type Employee = z.infer<typeof Employee>;

export const employeeRouter = router({
  all: procedure.query(() => {
    return employees;
  }),
  one: procedure.input(z.object({ name: z.string() })).query(({ input }) => {
    const employee = employees.find((employee) => employee.name === input.name);

    return employee || null;
  }),
});
