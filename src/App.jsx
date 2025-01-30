import { useState } from 'react'
import { Resume } from './components/Resume'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const personal = {
    name: 'THom',
    phone: 666
}
  return (
    <>
      <div className='container'>
        <div className="forms">

        </div>
        <div className="cv">
          <Resume personal={personal}/>
        </div>
        </div>
    </>
  )
}

export default App
