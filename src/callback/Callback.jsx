import React, { useCallback, useState } from 'react'
import CallbackExp from './CallbackExp'

export const Callback = () => {
  const [add, setAdd] = useState(0)
    const multipication = useCallback(function multi(){
       
    }, [])

  return (
    <div>
        <h1>learning useMemo Hooks</h1>
        {multipication}
        <button onClick={() => setAdd(add + 1)}>addition</button>
        <CallbackExp multipication= {multipication}/>
        <span>{add}</span>
    </div>
  )
}
