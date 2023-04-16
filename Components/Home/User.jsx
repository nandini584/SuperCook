import React from 'react'

function User() {
  return (
    <div className='border-2 rounded-lg w-1/3 py-9 px-7 flex flex-col items-center h-3/4'> 
        <img src="../../src/assets/user.jpg" alt="" className='rounded-full w-2/5'/>
        <h1 className='mt-6 text-2xl font-medium'>Yashika Maurya</h1>
        <p className='text-center mt-5'>Hello fellow baking enthusiasts!
<br />
I'm thrilled to share a delightful recipe on our website that's sure to impress. With minimal ingredients and concise instructions, you'll effortlessly create a scrumptious treat. Don't hesitate to give it a whirl and unlock the joys of baking! Bon appétit!</p>
        <button className="outline outline-offset-2 outline-3 py-0.5 px-6 mx-6 mt-6">Read More</button>
    </div>
  )
}

export default User