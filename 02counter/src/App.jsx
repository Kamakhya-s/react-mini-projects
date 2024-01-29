import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(0)
const addvalue =() =>{
  setCounter(counter+=1);
}
const removevalue=()=> {
  if(counter>0)
  setCounter(counter-=1);
else return setCounter(0)
}
  return (
    <>
     <h1>counter:{counter}</h1>
     <button onClick={addvalue}>add value</button>
     <br />
     <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
