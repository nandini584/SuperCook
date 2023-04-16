import React from 'react'
import Searchbar from '../Components/Home/Searchbar'
import Navbar from '../Components/Home/Navbar'
import Recipe from "../Components/ReadRecipes/Recipe"
import CommentBox from '../Components/CommentsSection/CommentBox'
import Footer from '../Components/Home/Footer'
function ReadRecipe() {
  return (
    <>
    <Searchbar/>
    <Navbar />
    <Recipe/>
    <CommentBox />
    <Footer />
    </>
  )
}

export default ReadRecipe