import z from 'zod';

export const employeeDetails = z.object({
    name: z.string(),
    position: z.string(),
    department: z.string(),
    email: z.string(),
    phone_number: z.string()
})

type EmployeeType = z.infer<typeof employeeDetails>;

export default EmployeeType