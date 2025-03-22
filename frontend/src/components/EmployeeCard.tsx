import { Link } from "react-router-dom"
import Avatar from "./Avatar"

const EmployeeCard = ({id,name,position}:{id: string,name: string,position:string}) => {
  return (
    <div className="employee-card">
     <div style={{display: "flex",flexDirection: "row", alignItems: "center",gap: "8px"}}>
     <Avatar name={name}/>
      <div className="card-employee-details">
        <h1 className="card-employee-name">{name}</h1>
        <h2 className="card-employee-position">{position}</h2>
      </div>
     </div>
     <Link className="btn" to={`/${id}`}>More Info</Link>
    </div>
  )
}

export default EmployeeCard
