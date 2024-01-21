import React, { useMemo, useState } from 'react'

export const Memo = () => {
    const [add, setAdd] = useState(0)
    const [subs, setSubs] = useState(0)
    const multipication = useMemo(function multi(){
        console.log('******usememo******');
        return add * 10
    }, [add])

  return (
    <div>
        <h1>learning useMemo Hooks</h1>
        {multipication}
        <button onClick={() => setAdd(add + 1)}>addition</button>
        <span>{add}</span> <br/>
        <button onClick={() => setSubs(subs - 1)}>subs</button>
        <span>{subs}</span>
    </div>
  )
}
