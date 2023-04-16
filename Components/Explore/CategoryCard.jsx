import React, { useEffect, useState }  from 'react'
import {Link} from 'react-router-dom';
function CategoryCard(props) {
    const [category_item, setCategory_item]=useState([]);
    useEffect(()=>{
        categoryitems();
    },[]);
    const categoryitems = async ()=> {
    const check= localStorage.getItem('category_item');
    if (check){
        setCategory_item(JSON.parse(check))
    }
    else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=4&diet=${props.tag}`)
            const data= await api.json();
            localStorage.setItem('stateitem', JSON.stringify(data.recipes));
            setCategory_item(data.recipes);
            console.log(data)
        }
    }
    return(<>
    {


    category_item.map((recipe)=>{

        return (
            <Link to={"/recipe/"+ recipe.id}>
                <div key={recipe.id}>
          <div className='border-2 rounded-lg w-64 h-72 hover:scale-110 hover:opacity-70'>
          <img src={recipe.image} alt={recipe.title} className='rounded-s-sm '/>
              <h1 className='text-xl font-medium p-4'>{recipe.title}</h1>
          </div>
          </div>  
          </Link>
        )
    })
    }
    </>)
}

export default CategoryCard