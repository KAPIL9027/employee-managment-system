"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_model_1 = __importDefault(require("../db/models/employee.model"));
const empolyeeSchema_1 = require("../zodSchemas/empolyeeSchema");
const employeeRouter = (0, express_1.Router)();
// Create a new employee
employeeRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const details = req.body;
        const { success } = empolyeeSchema_1.employeeDetails.safeParse(details);
        let createdEmployee = undefined;
        if (success) {
            createdEmployee = yield employee_model_1.default.create(details);
        }
        res.json(createdEmployee);
    }
    catch (error) {
        console.log('Error: ' + error.message);
        res.status(500).json({ error: "Oops, Somthing went wrong!" });
    }
}));
// Get all employees
employeeRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employees = yield employee_model_1.default.findAll();
    res.json(employees);
}));
// Get employee by ID
employeeRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield employee_model_1.default.findByPk(req.params.id);
    employee ? res.json(employee) : res.status(404).json({ error: "Employee not found" });
}));
// Update an employee by ID
//@ts-ignore
employeeRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield employee_model_1.default.findByPk(req.params.id);
    if (!employee)
        return res.status(404).json({ error: "Employee not found" });
    const updatedEmployee = yield employee.update(req.body);
    res.json(updatedEmployee);
}));
// Delete an employee by ID
//@ts-ignore
employeeRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield employee_model_1.default.findByPk(req.params.id);
    if (!employee)
        return res.status(404).json({ error: "Employee not found" });
    yield employee.destroy();
    res.json({ message: "Employee deleted successfully" });
}));
exports.default = employeeRouter;
