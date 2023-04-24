import React, { Component, useState, useEffect} from 'react'
import logo from './assets/react.svg'
import axios from 'axios'


export const App = () => {
  const[count, setCount] =  useState(0)
  const[users, setUsers] = useState([])

  async function getUsers() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() =>{
    getUsers()
    // axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data)).catch((err) => console.log(err))

  },[count])

    return (
      <div className="flex flex-col justify-center items-center gap-y-6 h-screen">
        <img src={logo} className='w-40 cursor-pointer' alt='react logo' onClick={()=>setCount(0)} />
        <button type='button' className='block text-lg text-yellow-50 bg-[#00d8fd] p-3 rounded-lg hover:bg-black' onClick={()=>setCount(count+1)}>Count is: {count}</button>
        <ul>
          {users.map((user) => (<li key={user.id}>{user.name}</li>))}
        </ul>
      </div>
    )
}

export default App
