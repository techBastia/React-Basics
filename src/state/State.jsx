import React, { useState } from 'react'


export const State = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <button onClick={() => setCount(count + 1)}> + </button> 
        {count} 
        <button onClick={() => setCount(count - 1)}> - </button>
    </>
  )
}
