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
    <div>
      <h1>Feed Page</h1>
      <button onClick={toggleFormVisibility}>Create Post</button>
      {showForm && (
        <div className="card">
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
                Post Description:
                <textarea
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
            <div className="form-group">
              <label>
                Location:
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}

      <div className="container">
      {posts.map((posts, index) => (
        <div className="post-card" key={index}>
          <div className="card-header">
            <img className="post-card-image" src={posts.img_url} alt="" />
          </div>
          <div className="card-body123">
            <span className="tag tag-teal">{posts.header}</span>
            <p>{posts.description}</p>
            <small>{posts.location}</small>
            <div className="user">
              {/* <img src={posts.img_ur} alt="" /> */}
              <div className="user-info">
                {/* <h5>{user.username}</h5> */}
                {/* <small>{posts.created_at}</small> */}
                
              </div>
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
  );
}

export default FeedPage;
