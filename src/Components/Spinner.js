import React from 'react'
import LoadingImg from '../LoadingSpinner.gif'

function Spinner() {
  return (
    <div className='text-center'>
        <img src={LoadingImg} alt='Loading'/>
    </div>
  )
}

export default Spinner
