"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Create an in-memory SQLite database
const sequelize = new sequelize_1.Sequelize("sqlite::memory:", {
    logging: false,
});
exports.default = sequelize;
