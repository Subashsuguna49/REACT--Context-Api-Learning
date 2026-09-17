import React, {  useState } from 'react'
import Card from './components/card/Card'
import './App.css'
import ContextApi from './components/ContextApi'



const App = () => {


const [count,setCount] = useState(0)

  return (
    <>
    <ContextApi.Provider value ={{count,setCount}}>

      <h1>{count}</h1>

      <div className='app-container'>
          <Card name="subash" gmail="subash@gmail.com" btnName="btn1" />
          <Card name="arun" gmail="arun@gmail.com" btnName="btn2" />
          <Card name="prem" gmail="prem@gmail.com" btnName="btn3" />
      </div>

    </ContextApi.Provider>
  
    </>
  )
}

export default App