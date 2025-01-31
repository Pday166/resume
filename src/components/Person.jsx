import { useState } from "react";
import { Input } from "./Input"
import { IoMdArrowDropdown } from "react-icons/io";



function PersonalForm({ personal, handleChange }) {
    const[isCollapsed, setIsCollapsed] = useState(false)
    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState)
    }
    return (
        <div className="personal-form-container">
            <h3>Personal Information</h3>
           <IoMdArrowDropdown className="collapse-btn" onClick={toggleCollapse}/>
            
            
            <div className={`form-section ${isCollapsed ? 'collapsed' : ''}`}>
      <form action="" className="form">
        {Object.entries(personal).map(([key, field]) => (
          <Input
            key={key} 
            type={field.type}
            id={key}
            name={key}
            label={field.label}
            onChange={handleChange}
            value={field.value} 
          />
        ))}
        <button type="button" className="btn">Submit</button>
      </form>
      </div>
      </div>
    );
  }

function Personal({personal}){
    return (
<>
<div className="personal">
<h1>{personal.name.value}</h1>
{personal.phone.value} | {personal.email.value}
</div>
</>
    )
}



export {Personal, PersonalForm}