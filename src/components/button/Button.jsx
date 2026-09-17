import React, { useContext } from 'react'
import ContextApi from '../ContextApi';

const Button = ({content }) => {

const {count,setCount} = useContext(ContextApi);

function Click(){
  setCount(count + 1 )
}

  return (
    <button  className='btn'  onClick={Click} >{content}</button>
  )
}

export default Button