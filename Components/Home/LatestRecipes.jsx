import React from 'react'

function LatestRecipes() {
  return (  
    <div className='w-3/5'>
        <div>
            <h1 className='text-4xl font-bold'>Latest Recipes</h1>
        </div>
        <div className='border-2 rounded-lg mt-8'>
            <img src="../../src/assets/LatestRecipe.jpg" alt="" className='h-1/3 rounded-t-lg'/>
            <div className='p-12'>

            <div>
            <h1 className='text-3xl font-medium mb-4'>Red Velvet Brownie</h1>
            <h2> Bake the <span className='text-red-600 font-bold'>new Red Velvet</span> . A perfect balance of appearance, texture, and flavour. Make with the best and freshest ingredients, mix meticulously in the right proportions and bake to flawless perfection.</h2>
            </div>
            
            </div>
        </div>
        
    </div>
  )
}

export default LatestRecipes