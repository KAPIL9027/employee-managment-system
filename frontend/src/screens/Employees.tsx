import EmployeeCard from "../components/EmployeeCard";

const Employees = ({
  employees,
}: {
  employees: { id: string; name: string; position: string }[];
}) => {
  if (employees.length === 0)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
        }}
      >
        No Employees found!
      </div>
    );
  return (
    <div className="list-container">
      {employees.map((employee, idx) => {
        return (
          <EmployeeCard
            key={`${idx}`}
            id={employee.id}
            name={employee.name}
            position={employee.position}
          />
        );
      })}
    </div>
  );
};

export default Employees;
