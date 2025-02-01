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
    setExpArr([...expArr, experience])
    setExperience(initExperience)
    console.log(expArr)

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
    />
        </div>
        <div className="cv">
          <Resume personal={personal} experience={expArr}/>
        </div>
        </div>
    </>
  )
}

export default App
