import React from 'react'
import {Link} from "react-router-dom"
function Footer() {
  return (
    <div className='py-14 px-20 bg-gray-100 mt-10'>
    <div className='flex flex-row '>
        <div>
        <h1 className='text-5xl font-bold font-merienda my-10'>SuperCook</h1>
            <p className='text-sm text-gray-500 w-2/3'>SuperCook, the only place to seek for if you wanna please your palate. Explore our delicious and ready to make recipes now.</p>
        </div>
        <div className='flex flex-row'>
            <ul className='mx-10'>
              <Link to={"/"}><li className='text-xl font-semibold mb-4'>SuperCook</li></Link>  
              <Link to={"/"}><li className='mb-2  text-gray-500'>Home</li></Link>  
              <Link to={"/share"}><li className='mb-2  text-gray-500'>Share</li></Link>  
              <Link to={"/explore"}><li className='mb-2  text-gray-500'>Explore</li></Link>  
              <Link to={"/profile"}><li className='mb-2 text-gray-500'>Profile</li></Link>  
            </ul>
            <ul className='ml-20'>
                <li className='text-xl font-semibold mb-4'>Follow</li>
                <li className='mb-2  text-gray-500'>Facebook</li>
                <li className='mb-2  text-gray-500'>Instagram</li>
                <li className='mb-2  text-gray-500'>Linkedin</li>
                <li className='mb-2 text-gray-500'>Twitter</li>
            </ul>
        </div>
    </div>
        <hr className='text-grey-800 my-8'/>
        <p className='text-gray-500 font-sm'>© 2023 SuperCook - All Rights Reserved</p>
    </div>
  )
}

export default Footer