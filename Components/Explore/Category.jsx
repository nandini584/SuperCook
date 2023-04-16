import React from 'react'
import CategoryCard from './CategoryCard'

function Category(props) {
  return (  
    <div className='mx-40 mt-14'>
    <h1 className='text-4xl font-bold mb-12'>{props.title}</h1>
    <div className="flex flex-row gap-8 flex-wrap">
    <CategoryCard tag={props.tag} />
    </div>
        
    </div> 
  )
}

export default Category