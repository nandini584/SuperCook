import React,{useState, useEffect} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../utils/firebase'
import {auth} from "../../utils/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
function Comment() {
    const [comment, setComment] = useState("");
    const [user, loading] = useAuthState(auth);
   
    useEffect(()=>{
        getcomments()
    },[])

    useEffect(()=>{
        console.log(comment)
    },[comment])

function getcomments (){
    const commentref= collection(db, 'Comments')
    getDocs(commentref).then(response=>{
const comments= response.docs.map(doc => ({
    data: doc.data(),
     id: doc.id,
}))
setComment(comments)

    }).catch(error => console.log(error.message))

}
  return (
    <div className='shadow-md p-10 rounded-lg mx-40 my-5'>
{comment &&comment?.map(com => (
    <div className="flex flex-col justify-center">
        <div className="flex flex-row items-center">
<img src={user.photoURL} alt={user.displayName} className='w-12 h-12 rounded-full mr-4'/>
<div className="flex flex-col">
<h1 className='text-xl font-semibold'>{user.displayName}</h1>

<h1 key={com.id}>{com.data.comment}</h1>
</div>
        </div>
    </div>
    ))
}
    </div>
  )
}

export default Comment