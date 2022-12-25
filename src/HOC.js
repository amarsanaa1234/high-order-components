import React, { useState } from 'react'

function UpdatedComponent(OrignalComponent) {
  function NewComponent(){

    const [money, setMoney] = useState(10)
    const handleMoney = () => {
        setMoney(money * 2)
    }
    const handlePrice = () => {
        setMoney(money / 2)
    }
    return <OrignalComponent handleMoney={handleMoney} handlePrice={handlePrice} money={money} />
  }
  return NewComponent
}

export default UpdatedComponent