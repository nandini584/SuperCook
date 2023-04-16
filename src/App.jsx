import './App.css'
import Home from '../Pages/Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import ExploreRecipes from '../Pages/ExploreRecipes';
import Searched from '../Pages/Searched';
import ReadRecipe from '../Pages/ReadRecipe';
import Signup from '../Pages/Signup';
import Profile from '../Pages/Profile';
import CommentBox from '../Components/CommentsSection/CommentBox';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<ExploreRecipes />} />
    <Route path="/searched/:search" element={<Searched />} />
    <Route path="/recipe/:name" element={<ReadRecipe />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/recipe/:name" element={<CommentBox />} />
    
    
    </Routes>
    </BrowserRouter>

  )
}

export default App
