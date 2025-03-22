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
const employee_model_1 = __importDefault(require("./models/employee.model"));
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield employee_model_1.default.bulkCreate([{
            name: "Ramesh Aggarwal",
            position: "Sr. Software Engineer",
            department: "Development",
            email: "ramesh.aggarwal@hono.ai",
            phone_number: "+919090909090"
        },
        {
            name: "Ramya Aggarwal",
            position: "Sr. Software Engineer",
            department: "Development",
            email: "ramya.aggarwal@hono.ai",
            phone_number: "+918090909090"
        },
        {
            name: "Ramesh Sethi",
            position: "Sr. Software Engineer",
            department: "Development",
            email: "ramesh.sethi@hono.ai",
            phone_number: "+917090909090"
        },
        {
            name: "Mayank Aggarwal",
            position: "Sr. Software Engineer",
            department: "Development",
            email: "mayank.aggarwal@hono.ai",
            phone_number: "+916090909090"
        },
        {
            name: "David Miller",
            position: "Staff Software Engineer",
            department: "Development",
            email: "david.miller@hono.ai",
            phone_number: "+915090909090"
        }
    ]);
});
seedDatabase();
