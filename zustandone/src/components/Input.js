import React,{useRef} from 'react'
import {usePeopleStore} from '../store'
const Input = () => {
    const inputRef=useRef()
    const addPerson=usePeopleStore(state=>state.addPerson)
    const handleAdd=()=>{
addPerson(inputRef.current.value)
inputRef.current.value=""
    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
   <button onClick={handleAdd}>Add Person</button>
    </div>
  )
}

export default Input