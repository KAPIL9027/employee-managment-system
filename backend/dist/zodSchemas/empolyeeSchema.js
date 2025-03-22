"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeDetails = void 0;
const zod_1 = __importDefault(require("zod"));
exports.employeeDetails = zod_1.default.object({
    name: zod_1.default.string(),
    position: zod_1.default.string(),
    department: zod_1.default.string(),
    email: zod_1.default.string(),
    phone_number: zod_1.default.string()
});
