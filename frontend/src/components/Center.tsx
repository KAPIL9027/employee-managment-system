
const Center = ({children}:{children: React.ReactNode}) => {
  return (
    <div style={{display: "flex", height: "100vh",flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
      {children}
    </div>
  )
}

export default Center
