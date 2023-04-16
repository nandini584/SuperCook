import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import {FaCommentAlt} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
function Superdelicious() {

const [state_item, setState_item]=useState([]);

useEffect(()=>{
    fooditems();
},[]);
const fooditems = async ()=> {
const check= localStorage.getItem('state_item');
if (check){
    setState_item(JSON.parse(check))
}
else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=4`)
          const data= await api.json();
          localStorage.setItem('stateitem', JSON.stringify(data.recipes));
          setState_item(data.recipes);
       
    }
}

  return (
    <>
    {state_item.map((recipe)=>{
        return (
    <Link to={"/recipe/"+ recipe.id}>
<div className='flex flex-row border-2 rounded-lg w-3/5 h-1/5 mb-14 hover:bg-gray-100' key={recipe.id}>
    
        <div className='w-72' >
            <img src={recipe.image} alt={recipe.title} className='rounded-s-md w-full'/>
        </div>
        <div className='px-8 flex flex-col justify-center'>
            <h1 className='text-xl font-medium w-72'>{recipe.title}</h1>
            <div className='flex flex-row items-center mt-2'>
                <img src="../../src/assets/user.jpg" alt="" className='rounded-full w-8 mr-2'/>
                <p>Chef's name</p>
            </div>
            <div className='flex flex-row mt-5 items-center justify-between'>
                <div className='flex flex-row items-center justify-center'>
                    <AiFillHeart className='mr-2 text-2xl text-red-600' />
                    <p className='text-sm'>23</p>
                </div>
                <div className='flex flex-row items-center justify-center'>
                   <FaCommentAlt className='mr-2 text-xl text-gray-300' />
                    <p className='text-sm'>234</p>
                </div>
            </div>
            
        </div>
    </div>
    </Link>
        )
    })}
    
    
    </>
  )
}

export default Superdelicious