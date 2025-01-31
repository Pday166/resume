import { useState } from 'react'
import { Resume } from './components/Resume'
import './App.css'
import { PersonalForm } from './components/Person'

function App() {
  const initPersonal = {
    name: {label: "Name", value: "", type: "text"},
    phone: {label: "Phone", value: "", type: "tel"},
    email: {label: "Email", value: "", type: "email"}

}
  const [personal, setPersonal] = useState(initPersonal)
  
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
  return (
    <>
      <div className='container'>
        <div className="forms">
    <PersonalForm 
    personal={personal}
    handleChange={handlePersonal}/>
        </div>
        <div className="cv">
          <Resume personal={personal}/>
        </div>
        </div>
    </>
  )
}

export default App
