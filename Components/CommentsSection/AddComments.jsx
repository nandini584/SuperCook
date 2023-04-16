import React,{useState} from 'react'
import { addDoc, collection } from 'firebase/firestore'
import {db} from '../../utils/firebase'
function AddComments() {
    const [comment, setComment]= useState('')
    function handleSubmit(e){
        e.preventDefault()
        if(comment === ''){
            return
        }
        const commentref=collection(db,'Comments')
        addDoc(commentref, {comment}).then(
            response=>{
                console.log(response.id)
            }
        ).catch(error =>{
            console.log(error.message)
        })
        
    }
  return (
    <div className='shadow-xl p-14 rounded-lg mx-40'>
        
        <form onSubmit={handleSubmit} >
            <label htmlFor="comment"></label>
            <input type="text" value={comment} placeholder="Add Comments" className='border-gray-500 border-2 rounded-md py-2 pl-4 w-4/5' onChange={ e=> setComment(
                e.target.value
            ) }/>
            <button type='submit' className='border-amber-400 border-2 bg-gradient-to-r from-amber-500 to-amber-400 w-28 h-10 rounded-md text-xl font-semibold mx-10 text-white'>Send</button>
        </form>
        </div>
  )
}

export default AddComments