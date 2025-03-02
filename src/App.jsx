import { useState } from 'react'
import { Resume } from './components/Resume'
import './App.css'
import { PersonalForm } from './components/Person'
import { ExperienceForm } from './components/Experience'
import { initPersonal, initExperience } from './initialValues'

function App() {
  const [personal, setPersonal] = useState(initPersonal)
  const [experience, setExperience] = useState(initExperience)
  const [expArr, setExpArr] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null); 
  const[isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(prevState => !prevState)
}
  
  function handlePersonal(e) {
    const { name, value } = e.target;
    setPersonal({
      ...personal,
      [name]: {
        ...personal[name], // preserve other fields like label and type
        value // update the value of the specific field
      }
    });
  }
  function handleExperience(e) {
    const {name, value} = e.target;
    setExperience({...experience, [name]: {...experience[name], value}})
  }

  function addExp(e) {
    e.preventDefault()
    if (isEditing) {
      const updatedExpArr = expArr.map((exp, i) => {
        if (i === editIndex) {
          // Replace the experience object at the specified index with the edited version
          return experience;
        }
        return exp; // Keep the other experiences unchanged
      });
    
      // Set the updated expArr state
      setExpArr(updatedExpArr);
      setIsEditing(false);
      setEditIndex(null);
      setExperience(initExperience);
      return;
    }
    // Add the new experience object to the expArr state
    setExpArr([...expArr, experience])
    setExperience(initExperience)
    console.log(expArr)
}

function editExp(index) {
  if(isCollapsed) {
    toggleCollapse()
  }
  setIsEditing(true)
  setExperience(expArr[index])
  setEditIndex(index)
  
  

}
  return (
    <>
      <div className='container'>
        <div className="forms">
    <PersonalForm 
    personal={personal}
    handleChange={handlePersonal}/>
    <ExperienceForm 
    experience={experience}
    handleChange={handleExperience}
    onSubmit={addExp}
    toggleCollapse={toggleCollapse}
    isCollapsed={isCollapsed}
    />
        </div>
        <div className="cv">
          <Resume personal={personal} experience={experience} expArr={expArr} 
          editExp={editExp}/>
        </div>
        </div>
    </>
  )
}

export default App
