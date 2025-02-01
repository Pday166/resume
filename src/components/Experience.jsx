import { useState } from "react";
import { Input } from "./Input"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function ExperienceForm({experience, handleChange, onSubmit}){
    const[isCollapsed, setIsCollapsed] = useState(false)
    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState)
    }
    return (
<>
<div className="form-container">
            <h3>Experience</h3>
            {isCollapsed ? <IoMdArrowDropdown className="collapse-btn" onClick={toggleCollapse}/> : <IoMdArrowDropup className="collapse-btn" onClick={toggleCollapse}/>
            }
           
           </div>

            
            <div className={`form-section ${isCollapsed ? 'collapsed' : ''}`}>
<form action="" className="form" onSubmit={onSubmit}>
        {Object.entries(experience).map(([key, field]) => (
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
        <button type="submit" className="btn" >Submit</button>
      </form>
</div>

</>
    )
}

function Experience({expArr}){
    return (
<>
<div className="experience">
<h2>Professional Experience</h2>
{expArr.map((experience, index) => (
<div key={index}>

{experience.position.value} {experience.company.value} {experience.description.value} {experience.location.value} {experience.start.value}{experience.end.value}
</div>
))}
</div>
</>
    )
}
// position: {
//     company: {l
//     description
//     start: {lab
//     end: {label
//     location: {


export {Experience, ExperienceForm}