import React from 'react'
import {auth} from "../../utils/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
function UserData() {
    const [user, loading] = useAuthState(auth);
   
  return (
    <>

    <div className=' rounded-lg bg-white p-8 bg-gradient-to-b from-amber-600 to-amber-400 mb-3'>
<div className='flex flex-col items-center justify-center'>

        <img src={user.photoURL} alt={user.displayName} className='rounded-full pb-3' />
       
            <h1 className='font-opensans font-semibold text-xl' >{user.displayName}</h1>
</div>
            <div className='flex flex-row justify-center mt-2'>
                <span className='mx-5'>Saved Recipes: <h5></h5> </span>
                <span className='mx-5'>Liked Recipes: <h5></h5> </span>
                <span className='mx-5'>Comments: <h5></h5> </span>
            </div>

        </div>

    
    </>
  )
}

export default UserData