// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../services/firebase";

// function Posts({ isAuth }) {
//   const [postLists, setPostList] = useState([]);
//   const postsCollectionRef = collection(db, "posts");

//   useEffect(() => {
//     const getPosts = async () => {
//       const data = await getDocs(postsCollectionRef);
//       setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getPosts();
//   }, [deletePost]);

//   const deletePost = async (id) => {
//     const postDoc = doc(db, "posts", id);
//     await deleteDoc(postDoc);
//   };
//   return (
//     <div className="homePage">
//       {postLists.map((post) => {
//         return (
//           <div className="post">
//             <div className="postHeader">
//               <div className="title">
//                 <h1> {post.title}</h1>
//               </div>
//               <div className="deletePost">
//                 {isAuth && post.author.id === auth.currentUser.uid && (
//                   <button
//                     onClick={() => {
//                       deletePost(post.id);
//                     }}
//                   >
//                     {" "}
//                     &#128465;
//                   </button>
//                 )}
//               </div>
//             </div>
//             <div className="postTextContainer"> {post.postText} </div>
//             <h3>@{post.author.name}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Posts;
import React from 'react'

export default function Posts() {
  return (
    <div className='mx-4 pt-8 pb-12 min-h-screen'>

      <div className='mx-56 grid place-items-center'>
        <h1 className='text-5xl font-semibold'>Posts</h1>
        <div className="bg-tertiary w-44 h-1 my-2"></div>
      </div>

    </div>
  )
}
