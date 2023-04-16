import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from "../../utils/firebase"

function Searchbar() {
const [user, loading] = useAuthState(auth);

  const [input, setInput]=useState("");
  const navigate= useNavigate();

  const submitHandler=(e)=>{
    e.preventDefault(); //to  prevent the page from refreshing
    navigate('/searched/'+input)
  }
  
  return (

    <div className="flex flex-row items-center justify-around mt-4 font-opensans">

        <div>
        <FontAwesomeIcon icon={faFacebook} size="xl" className='mx-4 '/>
        <FontAwesomeIcon icon={faInstagram} size="xl" className='mx-4'/>
        <FontAwesomeIcon icon={faTwitter} size="xl" className='mx-4'/>
        </div>
        <div className='flex flex-row items-center'>
        <form onSubmit={submitHandler}>
            <input onChange={
              (e)=>setInput(e.target.value)
              } 
              type="text" placeholder="Search" className='py-1 pl-2 rounded-lg border-2 border-zinc-600' value={input}/>
              
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className='mx-3' />
        </form>
        <div>
        {!user && (
  
          <Link to={"/signup"}><button className="outline outline-offset-2 outline-3 py-0.5 px-6 mx-6">Sign up</button></Link>
  )}
  {user && (
    <Link to={'/profile'}>
      <img src={user.photoURL} alt="" className='rounded-full w-12 ml-5 border-black border-2'/>
    </Link>
  )}
        </div>
        </div>
       
    </div>
  )
}

export default Searchbar