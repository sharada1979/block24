import { useState } from 'react'
import {puppyList} from './data.js'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [featPupId, setFeatPupId] = useState(null)
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppyList)
  
  function handleClick() {
    // some logic here
  }
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App
