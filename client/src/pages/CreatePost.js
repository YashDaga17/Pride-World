// import React, { useState, useEffect } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db, auth } from "../services/firebase";
// import { useNavigate } from "react-router-dom";

// function CreatePost({ isAuth }) {
//   const [title, setTitle] = useState("");
//   const [postText, setPostText] = useState("");

//   const postsCollectionRef = collection(db, "posts");
//   let navigate = useNavigate();

//   const createPost = async () => {
//     await addDoc(postsCollectionRef, {
//       title,
//       postText,
//       author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
//     });
//     navigate("/posts");
//   };

//   useEffect(() => {
//     if (!isAuth) {
//       navigate("/login");
//     }
//   }, []);

//   return (
//     <div className="createPostPage">
//       <div className="cpContainer">
//         <h1>Create A Post</h1>
//         <div className="inputGp">
//           <label> Title:</label>
//           <input
//             placeholder="Title..."
//             onChange={(event) => {
//               setTitle(event.target.value);
//             }}
//             className="text-black"
//           />
//         </div>
//         <div className="inputGp">
//           <label> Post:</label>
//           <textarea
//             placeholder="Post..."
//             onChange={(event) => {
//               setPostText(event.target.value);
//             }}
//             className="text-black"
//           />
//         </div>
//         <button onClick={createPost}> Submit Post</button>
//       </div>
//     </div>
//   );
// }

// export default CreatePost;
import React from 'react'

export default function CreatePost() {
  return (
    <div className='mx-4 pt-8 pb-12 min-h-screen'>

      <div className='mx-56 grid place-items-center'>
        <h1 className='text-5xl font-semibold'>Create Posts</h1>
        <div className="bg-tertiary w-44 h-1 my-2"></div>
      </div>

    </div>
  )
}
