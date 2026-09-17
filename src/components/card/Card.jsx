import React from 'react'
import Button from '../button/Button'


const Card = ({name,gmail,btnName }) => {
  return (
  
    
    <div className='card'>

        <div className='card-content'>
            <h2 className='card-name'>{name}</h2>
            <p className='card-gmail'>{gmail}</p>
        </div>

        <div className='card-button'>
            <Button  content={btnName}  />
         
        </div>

    </div>
   
  )
}

export default Card