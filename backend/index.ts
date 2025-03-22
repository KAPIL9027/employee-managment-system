import express from "express";
import sequelize from "./db/index";
import cors from 'cors';
import employeeRouter from "./routes/employee";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/employees",employeeRouter);

// Start server
app.listen(port, async () => {
  await sequelize.authenticate();
  console.log(`Server running at http://localhost:${port}`);
});
