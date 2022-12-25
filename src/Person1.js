import React, { useState } from 'react'
import UpdatedComponent from './HOC'

function Person1({money, handleMoney, handlePrice}) {
    // const [money, setMoney] = useState(10)
    // const handleMoney = () => {
    //     setMoney(money * 2)
    // }


  return (
    <div>
        <h2>Amaraad bgaa mongo ${money}</h2>
        <button onClick={handleMoney}>darj mongoo urjuul</button>
        <button onClick={handlePrice}>darj mongoo huraalga</button>
    </div>
  )
}

export default UpdatedComponent(Person1)