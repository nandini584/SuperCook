import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import {auth} from '../utils/firebase'
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile } from 'firebase/auth'
import Navbar from '../Components/Home/Navbar'
function Signup() {
   

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () =>{
        try {
            const result= await signInWithPopup(auth, googleProvider)
            
        } catch (error) {
            
        }
    }
    const fbProvider = new FacebookAuthProvider();
    const FacebookLogin = async () =>{
        try {
            const result= await signInWithPopup(auth, fbProvider)
            
        } catch (error) {
            
        }
    }

  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center justify-center my-10'>
    <div className='shadow-xl p-14 w-1/3 h-1/3 '>
        <h2 className='text-4xl font-merienda font-bold pb-8'>Join now!!</h2>
        <h3 className='text-md text-gray-500 font-medium'>Be the part of most amazing cooking community and relish your palate with most exotic recipes.</h3>
        <button onClick={FacebookLogin} className='flex flex-row items-center my-6 rounded-lg bg-blue-600 text-white text-xl px-16 py-3 font-medium'>
        <AiFillFacebook className='mr-2 text-3xl'/>
            Sign up with Facebook
            </button>
        <button onClick={GoogleLogin} className='flex flex-row items-center my-6 rounded-lg border-2 border-black text-xl px-16 py-3 font-medium'>
            
            <FcGoogle className='mr-3 text-3xl'/>
            Sign up using Google
            </button>

    </div>
    </div>
    </>
  )
}

export default Signup