import React from 'react'
import {NavLink} from "react-router-dom";
function Navbar() {
  return (
    <div className='font-opensans flex flex-col items-center justify-center'>
        <div>
          <h1 className='text-6xl font-bold font-merienda mt-16 mb-14'>SuperCook</h1>
           
        </div>
        <div className=''>
            <ul className='flex flex-row items-center justify-center font-medium'>
                <NavLink to={'/'}><li className='mx-4'>Home</li></NavLink>
                <NavLink to={'/share'}><li className='mx-4'>Share</li></NavLink>
                <NavLink to={'/explore'}><li className='mx-4'>Explore</li></NavLink>
                <NavLink to={'/profile'}><li className='mx-4'>Profile</li></NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Navbar