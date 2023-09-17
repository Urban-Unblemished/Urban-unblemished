// import React, { useEffect, useState } from "react";
// import { createPost, getPosts } from "../adapters/post-adapter";
// import PostCard from "./PostCard"; 

// function FeedPage() {
//   const [posts, setPosts] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [imgUrl, setImgUrl] = useState("");
//   const [postDescription, setPostDescription] = useState("");
//   const [postHeader, setPostHeader] = useState("");
//   const [location, setLocation] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getPosts();
//       setPosts(result);
//     };
//     fetchData();
//   }, []);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const postData = {
//       img_url: imgUrl,
//       description: postDescription,
//       header: postHeader,
//       location: location,
//     };

//     console.log('img_url')

//     createPost(postData);
//     setPosts((prevPosts) => [...prevPosts, postData]);

//     setImgUrl("");
//     setPostDescription("");
//     setPostHeader("");
//     setLocation("");
//     setShowForm(false);
//   };

//   const toggleFormVisibility = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <div>
//       <h1>Feed Page</h1>
//       <button onClick={toggleFormVisibility}>Create Post</button>
//       {showForm && (
//         <form onSubmit={handleFormSubmit}>
//           <label>
//             Image URL:
//             <input
//               type="text"
//               value={imgUrl}
//               onChange={(e) => setImgUrl(e.target.value)}
//             />
//           </label>
//           <label>
//             Post Description:
//             <textarea
//               value={postDescription}
//               onChange={(e) => setPostDescription(e.target.value)}
//             />
//           </label>
//           <label>
//             Header:
//             <input
//               type="text"
//               value={postHeader}
//               onChange={(e) => setPostHeader(e.target.value)}
//             />
//           </label>
//           <label>
//             Location:
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}

//       {posts.length === 0 ? (
//         <p>No posts available.</p>
//       ) : (
//         <ul>
//           {posts.map((post, index) => (
//             <ul key={index}>
//               <PostCard post={post} />
//             </ul>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default FeedPage;






import React, { useEffect, useState } from "react";
import { createPost, getPosts } from "../adapters/post-adapter";
import '../postCard.css';

// import PostCard from "./PostCard"; 

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postHeader, setPostHeader] = useState("");
  const [location, setLocation] = useState("");


//////DELETE POST ///////

const deletePost = (postId) => {
  const requestBody = {
    post_id: postId,
  };
  console.log("delete")
  fetch("http://localhost:3000/api/post/${postId}", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Post deletion successful");
        setPosts(posts.filter((posts) => posts.post_id !== postId))
        console.log("this is Post"+eventId)
      } else {
        console.error("Post deletion failed");
      }
    })
    .catch((error) => {
      console.error("Post deletion error:", error);
    });
  };





////////////////////////





  useEffect(() => {
    const fetchData = async () => {
      const result = await getPosts();
      setPosts(result);
    };
    fetchData();
  }, []);

  /////GET POST///////
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/post");
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };



  const handleFormSubmit = (e) => {
    e.preventDefault();

    const postData = {
      img_url: imgUrl,
      description: postDescription,
      header: postHeader,
      location: location,
    };

    createPost(postData);
    setPosts((prevPosts) => [...prevPosts, postData]);

    setImgUrl("");
    setPostDescription("");
    setPostHeader("");
    setLocation("");
    setShowForm(false);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div id = 'divBody'>
    <div id = 'formCard'>
      <h1>Feed Page</h1>
      <button onClick={toggleFormVisibility}>Create Post</button>
      {showForm && (
        <div className="card1234">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label>
                Image URL:
                <input
                  type="text"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Description:
                <input
                  value={postDescription}
                  onChange={(e) => setPostDescription(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Header:
                <input
                  type="text"
                  value={postHeader}
                  onChange={(e) => setPostHeader(e.target.value)}
                />
              </label>
            </div>
            {/* <div className="form-group">
              <label>
                Location:
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
            </div> */}
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}

      <div className="container">
      {posts.map((post, index) => (
        <div className="post-card" key={index}>
          <div className="card-header">
            <img className="post-card-image" src={post.img_url} alt="" />
          </div>
          <div className="card-body123">
           <span className="tag tag-teal">{post.header}</span>
            <h5>{post.description}</h5>
            {/* <h4>{posts.location}</h4> */}
            <div className="user">
              
              {/* <img src={posts.img_ur} alt="" /> */}
              <div className="user-info">
                {/* <h5>{user.username}</h5> */}
                {/* <small>{posts.created_at}</small> */}
                
              </div>
            </div>
            <div id = 'deleteButton'>
            <button id="button" onClick={() => deletePost(post.post_id)}>Delete</button>
              </div>
          </div>
        </div>
       ))} 
    </div>
      {/* {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <ul key={index}>
              <PostCard post={post} />
            </ul>
          ))}
        </ul>
      )} */}
    </div>
    </div>
  );
}

export default FeedPage;
