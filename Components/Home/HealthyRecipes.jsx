import React from 'react'

function HealthyRecipes() {
  return (
    <div className='flex flex-row '>     
    <div className='border-2 rounded-lg w-48'>
    <img src="../../src/assets/superdelicious.jpg" alt="" className='rounded-s-sm'/>
        <h1 className='text-xl font-medium p-2'>Recipe 1</h1>
    </div>
    <div className='border-2 rounded-lg w-48'>
    <img src="../../src/assets/superdelicious.jpg" alt="" className='rounded-s-sm'/>
        <h1 className='text-xl font-medium p-2'>Recipe 2</h1>
    </div>
    </div>
  )
}

export default HealthyRecipes