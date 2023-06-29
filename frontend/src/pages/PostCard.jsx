// // import React from "react";
// // import {
// //   Card,
// //   CardHeader,
// //   CardBody,
// //   CardTitle,
// //   CardText,
// //   Button,
// // } from "reactstrap";

// // const PostCard = ({ post }) => {
// //   const { img_url, description, header, location, comments } = post;

// //   return (
// //     // <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
// //     <div style={{ display: "flex", flexDirection: "row" }}>
// //       <div
// //         style={{
// //           width: "300px",
// //           border: "1px solid #ccc",
// //           padding: "10px",
// //           marginBottom: "10px",
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center",
// //         }}
// //       >
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             marginBottom: "10px",
// //           }}
// //         >
// //           {/* <img src={img_url} style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }} /> */}
// //           {/* <span>{header}</span> */}
// //         </div>
// //         <img src={img_url} style={{ width: "100%", marginBottom: "10px" }} />
// //         <h3 style={{ fontWeight: "bold" }}>{header}</h3>
// //         <p>{description}</p>
// //         {/* <p style={{ fontWeight: "bold" }}>Location: {location}</p> */}
// //         <Button color="primary">Comment</Button>
// //         <Button color="primary">Like</Button>
// //       </div>
// //       <div
// //         style={{
// //           // width: "300px",
// //           // border: "1px solid #ccc",
// //           // padding: "10px",
// //           // marginBottom: "10px",
// //           // display: "flex",
// //           // flexDirection: "column",
// //           // alignItems: "center",
// //         }}
// //       >
// //         {/* {comments ? <div>{comments}</div> : <></>} */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PostCard;




// // import React from 'react';
// // import '../postCard.css';


// //   return (
// //     <div className="container">
// //       {users.map((users, index) => (
// //         <div className="card" key={index}>
// //           <div className="card-header">
// //             <img className="card-image" src={user.postImage} alt="" />
// //           </div>
// //           <div className="card-body">
// //             <span className="tag tag-teal">Clean</span>
// //             <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
// //             <p>{user.description}</p>
// //             <div className="user">
// //               <img src={user.header} alt="" />
// //               <div className="user-info">
// //                 <h5>{user.username}</h5>
// //                 <small>{user.date}</small>
// //                 <small>{user.location}</small>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );


// // export default PostCard;
// // import React, { useEffect, useState } from "react";
// // const [posts, setPosts] = useState([]);

// // useEffect(() => {
// //   fetchPosts();
// // }, []);

// // const fetchPosts = async () => {
// //   try {
// //     const response = await fetch('http://localhost:3000/post');
// //     const data = await response.json();
// //     console.log(data)
// //     setPosts(data);
// //   } catch (error) {
// //     console.log('Error fetching posts:', error);
// //   }
// // };







// // import React from "react";
// import '../postCard.css';
// import React, { useEffect, useState } from "react";
// // import { post } from '../../../src/routes';

// const PostCard = ({ users }) => {

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("/api/post");
//       const jsonData = await response.json();
//       setPosts(jsonData);
//     } catch (error) {
//       console.log("Error fetching posts:", error);
//     }
//   };
//   console.log(posts)


//   return (
//     <div className="container">
//       {posts.map((posts, index) => (
//         <div className="card" key={index}>
//           <div className="card-header">
//             <img className="card-image" src={posts.img_url} alt="" />
//           </div>
//           <div className="card-body">
//             <span className="tag tag-teal">Clean</span>
//             <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
//             <p>{posts.description}</p>
//             <div className="user">
//               <img src={posts.header} alt="" />
//               <div className="user-info">
//                 {/* <h5>{user.username}</h5> */}
//                 {/* <small>{post.date}</small> */}
//                 <small>{posts.location}</small>
//               </div>
//             </div>
//           </div>
//         </div>
//        ))} 
//     </div>
//   )
// };

// export default PostCard;
