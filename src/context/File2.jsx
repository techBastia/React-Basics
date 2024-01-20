import React, {useContext} from 'react'
import {context} from '../index'

export const File2 = () => {
    const data = useContext(context)
  return (
    <div>
      <h1>this is file 2 {data}</h1> 
    </div>
  )
}
