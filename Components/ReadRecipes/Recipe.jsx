import React from 'react'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Recipe() {
  const [details, setDetails]= useState({});
  let params=useParams();
  
useEffect(()=>{
  if(params){

    fetchDetails(params);
  }
},[params]);
const fetchDetails=async (params)=>{
   console.log(params)
    const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`);
    const detaildata= await data.json();
    setDetails(detaildata);
    console.log(detaildata)
    console.log(params)
  }


  return (
    
    
    <div className='p-10 my-14 mx-40 flex flex-row justify-between bg-amber-400'>
      {details &&<><div className='w-3/4'>
        <h1 className="font-merienda text-5xl font-bold mb-14">Excited to Cook, Chef?</h1>
        <img src={details.image} alt={details.title} className='mb-10 w-full pr-10'/>
        
          <h2 className='font-opensans text-4xl font-semibold mb-10'>{details.title}</h2>
        <h2 dangerouslySetInnerHTML={{__html: details.summary}} className='font-opensans text-xl pr-10'></h2>
        <br />
        <h2 dangerouslySetInnerHTML={{__html: details.instructions}} className='font-opensans text-xl pr-10'></h2>
      </div>

        <div className='border-2 border-black rounded-lg py-9 px-7 w-1/4 inline mt-28 h-1/2'> 
        <h1 className='text-3xl font-medium mb-5'>Ingredients</h1>
        
        <ul>
           {details && details.extendedIngredients && Array.from (details?.extendedIngredients).map((ingredient)=>(
          <li key={ingredient.id} className='font-opensans font-medium text-sm'>{ingredient.original}</li>
          ))} 
        </ul>
        </div>
        </> }
        </div>
      
  )
}

export default Recipe