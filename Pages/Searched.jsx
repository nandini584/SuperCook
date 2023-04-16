import React from 'react'
import Searchbar from '../Components/Home/Searchbar'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import SearchRecipes from '../Components/SearchedRecipes/SearchRecipes'

function Searched() {
  return (
    <>
    <Searchbar/>
    <Navbar />
    <SearchRecipes />
    <Footer />
    </>
  )
}

export default Searched