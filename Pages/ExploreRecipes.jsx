import React from 'react'
import Searchbar from '../Components/Home/Searchbar'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import Category from '../Components/Explore/Category'
function ExploreRecipes() {
  return (
  <>
  <Searchbar/>
    <Navbar />
<Category title="Sugary Sweet" tag="dessert"/>
<Category title="Vegan's Delight" tag="vegan"/>
<Category title="Vegetarian's Hub" tag="vegetarian" />
<Category title="NonVeg Portal" tag="paleo" />
<Footer />
  </>
  )
}

export default ExploreRecipes