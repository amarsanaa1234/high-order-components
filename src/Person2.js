import React, { useState } from 'react'
import UpdatedComponent from './HOC'

function Person2({money, handleMoney}) {
    // const [money, setMoney] = useState(10)
    // const handleMoney = () => {
    //     setMoney(money * 2)
    // }

  return (
    <div>
        <h2>bataagiin mongo ${money}</h2>
        <button onClick={handleMoney}>darj mongogoo urjuul</button>
    </div>
  )
}

export default UpdatedComponent(Person2)