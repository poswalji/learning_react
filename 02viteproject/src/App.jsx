import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter ,setcounter]=useState(1)


const addvalue=()=>{
  if(counter<20){
  counter=counter+1;
  }
  else{

  }
  setcounter(counter);
}
const removevalue=()=>{
if(counter>0){
  counter=counter-1;}
 setcounter(counter)
}

  return (
    <>
     <h1>Malu with react</h1>
     <h2>counter :{counter}</h2>
     <button onClick={addvalue}>Add value </button>
     <br></br>
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
