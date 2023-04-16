import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
function Searched() {

const [searched, setSearched]= useState([]);
let params = useParams();
useEffect(()=>{
    getsearched(params.search);
},[params.search])

    const getsearched= async (name)=>{
        const data= await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&query=${name}`
        );
        const recipes = await data.json();
        setSearched(recipes.results);

       
    }
  return (
    <div className="flex flex-row gap-8 flex-wrap mx-40 mt-14">
        
        {searched.map((item)=>{
            return(
                
                <div key={item.id}>
                    <Link to={'/recipe/'+ item.id}>
                <div className='border-2 rounded-lg w-64 h-72 hover:scale-110 hover:opacity-70'>
                <img src={item.image} alt={item.title} className='rounded-s-sm'/>
                    <h1 className='text-xl font-medium p-4'>{item.title}</h1>
                </div>
                </Link>
                </div>  
            )
        })}
    </div>
  )
}

export default Searched