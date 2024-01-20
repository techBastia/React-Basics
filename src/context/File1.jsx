import React, {useContext} from 'react'
import { context } from '../index';

export const File1 = () => {
    const getData = useContext(context)
  return (
    <div>
    <h2>this data is coming from file1{getData}</h2>
    </div>
  )
}
