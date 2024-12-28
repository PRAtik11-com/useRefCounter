import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [number , setnumber] = useState(0)
   const add = useRef(number)
  
   function HandleAdd() {
    //  console.log(add.current.value);
    if (add.current < 30) {
      add.current = add.current + 1
      setnumber(add.current)
    }else{
      ""
    }
     console.log(add.current);
     
   }
   function HandleRemove() {
    // console.log(add.current.value);
   if (add.current > 0) {
     add.current = add.current - 1
     setnumber(add.current)
   }else{
    ""
   }
    console.log(add.current);
   }
 
  return (
    <>
      
      <h1>Value is : {number}</h1>
      <button onClick={HandleAdd} style={{marginRight : "10px"}}>ADD</button>
      <button onClick={HandleRemove} >REMOVE</button>
    </>
  )
}

export default App
