import React from 'react'
import Searchbar from '../Components/Home/Searchbar'
import Navbar from '../Components/Home/Navbar'
import UserData from '../Components/Profile/UserData'
import SavedRecipes from '../Components/Profile/SavedRecipes'
import LikedRecipes from '../Components/Profile/LikedRecipes'
import Comments from '../Components/Profile/Comments'

function Profile() {
  return (
    <>
    <Searchbar/>
    <Navbar />
    <div className='bg-gray-100 p-3 mt-5'>
        <UserData />
        <SavedRecipes />
        <LikedRecipes />
        <Comments />

    </div>
    </>
  )
}

export default Profile