// its a function who take calback function and render once the component ready
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Useeff = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setData(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    console.log(data);

  return (
    <div>
          {data.map((e,i) => {return <li key={i}>{e.title}</li>})}
    </div>
  )
}
