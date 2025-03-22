import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import Center from "../components/Center";

const Employee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState<any>({});
  const getEmployee = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/${id}`);
    const data = await res.json();
    if (data.error) return;
    setEmployee(data);
    console.log(employee);
  };
  useEffect(() => {
    getEmployee();
  }, []);
  if (Object.keys(employee).length === 0)
    return <div>No Employee found with this id!</div>;

  return (
    <Center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          backgroundColor: "white",
          border: "1px solid lightgray",
          borderRadius: "5px",
          padding: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Avatar name={employee.name} />
          <div className="card-employee-details">
            <h1 className="card-employee-name">{employee.name}</h1>
            <h2 className="card-employee-position">{employee.position}</h2>
          </div>
        </div>
        <div className="employee-detail">
          Department:{" "}
          <span className="employee-detail-value">{employee.department}</span>
        </div>
        <div className="employee-detail">
          Email: <span className="employee-detail-value">{employee.email}</span>
        </div>
        <div className="employee-detail">
          Phone Number:{" "}
          <span className="employee-detail-value">{employee.phone_number}</span>
        </div>
      </div>
    </Center>
  );
};

export default Employee;
