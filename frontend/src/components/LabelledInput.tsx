import { ChangeEvent } from "react"

const LabelledInput = ({label,placeholder,name,value,onChange}: {label:string,placeholder: string,name: string,value: string,onChange: (e: ChangeEvent<HTMLInputElement>)=> void}) => {
  return (
    <div className="labelled-input-container">
      <label className="label">{label}</label>
      <input className="input" type="text" placeholder={placeholder} id={name} value={value} name={name} onChange={onChange}/>
    </div>
  )
}

export default LabelledInput
