
import React from 'react'
import {usePeopleStore} from "../store";
const People = () => {
    const people =usePeopleStore(state=>state.people)
    return (
        <div>
<p>We have {people.length} people in our store</p>
<ul>{people.map((p,index)=>
    <li key={index}>{p}</li>
)}</ul>
        </div>
  )
}

export default People