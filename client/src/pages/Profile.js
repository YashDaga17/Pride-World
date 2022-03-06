import React from 'react'
import firebase from "firebase";
import NFTImg from "../assets/nft.png"

export default function Profile() {
  return (
    <div className='md:mx-28 mx-4 pt-8 pb-12 min-h-screen'>
      <div className='grif place-items-center'>
        <h1 className='text-3xl font-semibold'>My profile</h1>
      </div>
      <div className='mx-36'>
        <div
          className="flex flex-col md:flex-row space-y-3 md:space-y-0 drop-shadow-3xl p-3 mx-auto">
          <div className="w-full grid place-items-center md:drop-shadow-3xl">
            <img src={firebase.auth().currentUser.photoURL} width="200" height="200" alt="img" className='rounded-full' />
          </div>
          <div className="w-full md:w-2/3 flex flex-col p-3">
            <h1 className="text-xl">{firebase.auth().currentUser.displayName}</h1>
            <h1 className="text-xl">{firebase.auth().currentUser.email}</h1>
            <p className='text-xl my-2'>200 Points</p>
          </div>
        </div>
      </div>

      <div className='grif place-items-center'>
        <h1 className='text-2xl'>Your activity</h1>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">

        <div className="m-8">
          <div className="w-52 h-52 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-tertiary rounded-lg ">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold px-4">My Blogs</div>
          </div>
        </div>

        <img src={NFTImg} width="500" height="200" alt="img" className='' />

      </div>

    </div>
  )
}
