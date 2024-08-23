import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setcolor] = useState("pink")

  return (
    <>
    <div className='w-screen h-screen duration-200'
    style={{backgroundColor:color}}>
       <div className='flxed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '
       >
    
      <div className='rounded-2xl px-2 px-2 flex direction-colo  justify-between flex-wrap gap-4' >

        <button onClick={()=>setcolor("black")} className=' text-white ' style={{backgroundColor:'black'}}>black</button>
         <button onClick={()=>setcolor("green")}className=' text-white'  style={{backgroundColor:'green'}}>green</button>
          <button onClick={()=>setcolor("blue")}className=' text-white'  style={{backgroundColor:'blue'}}>blue</button>
           <button onClick={()=>setcolor("red")}className=' text-white'  style={{backgroundColor:'red'}}>red</button>
            <button onClick={()=>setcolor("yellow")}className=' text-black'  style={{backgroundColor:'yellow'}}>yellow</button>
             <button onClick={()=>setcolor("white")}className=' text-black'  style={{backgroundColor:'white'}}>white</button>
      </div>
     
       </div>
       </div>
    </>
  )
}

export default App
