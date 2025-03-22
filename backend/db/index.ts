import { Sequelize } from "sequelize";

// Create an in-memory SQLite database
const sequelize = new Sequelize("sqlite::memory:", {
  logging: false,
});

export default sequelize;
