import {Router} from "express";
import Employee from "../db/models/employee.model";
import EmployeeType, { employeeDetails } from "../zodSchemas/empolyeeSchema";
const employeeRouter = Router();


// Create a new employee
employeeRouter.post("/", async (req, res) => {
    try {
      const details = req.body;
      const {success} = employeeDetails.safeParse(details);
      let createdEmployee: EmployeeType | undefined = undefined;
      if(success){
         createdEmployee = await Employee.create(details);
      }
      
      res.json(createdEmployee);
    } catch (error: any) {
      console.log('Error: '+error.message);
      res.status(500).json({ error: "Oops, Somthing went wrong!" });
    }
  });
  
  // Get all employees
  employeeRouter.get("/", async (req, res) => {
    const employees = await Employee.findAll();
    res.json(employees);
  });
  
  // Get employee by ID
  employeeRouter.get("/:id", async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    employee ? res.json(employee) : res.status(404).json({ error: "Employee not found" });
  });
  
  // Update an employee by ID
  //@ts-ignore
  employeeRouter.put("/:id", async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    const updatedEmployee = await employee.update(req.body);
    res.json(updatedEmployee);
  });
  
  // Delete an employee by ID
  //@ts-ignore
  employeeRouter.delete("/:id", async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });
  
    await employee.destroy();
    res.json({ message: "Employee deleted successfully" });
  });


export default employeeRouter

