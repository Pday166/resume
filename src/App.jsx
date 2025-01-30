import { useState } from 'react'
import { Resume } from './components/Resume'
import './App.css'
import { PersonalForm } from './components/Person'

function App() {
  const initPersonal = {
    name: 'Thom',
    phone: '696'
}
  const [personal, setPersonal] = useState(initPersonal)
  
  function handlePersonal(e) {
    e.preventDefault()
    const { name, value} = e.target
    setPersonal({
      ...personal,
      [name]: value
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
