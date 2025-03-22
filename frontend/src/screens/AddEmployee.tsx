import { ChangeEvent, useState, MouseEvent } from "react";
import LabelledInput from "../components/LabelledInput";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");

  const validateInputs = () => {
    if (!name.trim() || !/^[a-zA-Z\s]+$/.test(name)) {
      return "Invalid Name: Only letters and spaces allowed.";
    }
    if (!position.trim() || !/^[a-zA-Z\s]+$/.test(position)) {
      return "Invalid Position: Only letters and spaces allowed.";
    }
    if (!department.trim() || !/^[a-zA-Z\s]+$/.test(department)) {
      return "Invalid Department: Only letters and spaces allowed.";
    }
    if (!email.trim() || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return "Invalid Email: Please enter a valid email address.";
    }
    if (!phone_number.trim() || !/^\d{10}$/.test(phone_number)) {
      return "Invalid Phone Number: Must be 10 digits.";
    }
    return null;
  };

  const onClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setMsg("");

    const errorMsg = validateInputs();
    if (errorMsg) {
      setMsg(errorMsg);
      return;
    }

    const options = {
      method: "POST",
      body: JSON.stringify({
        name,
        position,
        department,
        email,
        phone_number,
      }),
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}`, options);
    const data = await res.json();

    if (data.error) {
      setMsg("Invalid inputs provided!");
      return;
    }
    setMsg(`Successfully Added Employee - ${data.name}`);
  };

  return (
    <div className="addEmployeeContainer" style={{ marginTop: "96px" }}>
      <p className="addEmployeeText">
        <span style={{ color: "black" }}>Add </span>Employee
      </p>
      <form className="formStyles">
        <LabelledInput
          label={"Name"}
          value={name}
          placeholder="Name"
          name="Name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <LabelledInput
          label={"Position"}
          value={position}
          placeholder="Position"
          name="Position"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPosition(e.target.value)}
        />
        <LabelledInput
          label={"Department"}
          value={department}
          placeholder="Department"
          name="Department"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDepartment(e.target.value)}
        />
        <LabelledInput
          label={"Email"}
          value={email}
          placeholder="Email"
          name="Email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <LabelledInput
          label={"Phone Number"}
          value={phone_number}
          placeholder="Phone Number"
          name="PhoneNumber"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
        />

        {msg && (
          <div style={{ width: "100%", textAlign: "center", color: msg.includes("Invalid") ? "red" : "green" }}>
            {msg}
          </div>
        )}

        <button className="btn" onClick={onClick}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
