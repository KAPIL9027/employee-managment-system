

const Avatar = ({name}:{name:string}) => {
    const initials: string = name.split("")[0];
  return (
    <div style={{fontSize: "32px",color: "white",backgroundColor: "#3B3F5C",width: "52px",height: "52px",borderRadius: "100%",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
      <p>{initials}</p>
    </div>
  )
}

export default Avatar
