import { DataTypes, Model } from "sequelize";
import sequelize from ".././index";

class Employee extends Model {
  public id!: number;
  public name!: string;
  public position!: string;
  public department!: string;
  public email!: string;
  public phone_number!:string;
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
    sequelize,
    tableName: "employees",
  }
);

// Sync database
sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

export default Employee;
