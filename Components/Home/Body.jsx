import React from 'react'
import LatestRecipes from './LatestRecipes'
import User from './User'
import Superdelicious from './Superdelicious'
import HealthyRecipe from './HealthyRecipes'
function Body() {
  return (
    <>
    <div className='flex flex-col mx-40 mt-14'>
    <div className='flex flex-row justify-between'>
        <LatestRecipes/>
        <User />
        
    </div>
    <div className='mt-14'>
        <h1 className='text-4xl font-bold mb-8'>Super Delicious</h1>
    <Superdelicious />
    
    </div>
    {/* <div className='absolute right-40 inst-y-full'>

    <HealthyRecipe/>
    </div> */}
    </div>
    </>
    
  )
}

export default Body