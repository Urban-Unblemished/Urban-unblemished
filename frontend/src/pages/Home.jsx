import React, { useState } from 'react';
import Post from './Posts';

function Home() {
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');
  const [events, setEvents] = useState([]);
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!header || !content) {
      // Validate that required fields are filled
      alert('Please fill in the header and content fields.');
      return;
    }
    const newEvent = {
      id: Date.now(),
      header: header,
      content: content
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setHeader('');
    setContent('');
    setIsCreatingPost(false);
  };

  const handleCreatePost = () => {
    fetch('http://127.0.0.1:3000/api/post')
      .then(response => response.json())
      .then(posts => {
        // Handle the retrieved posts here
        console.log(posts);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
    setIsCreatingPost(true);
  };

  return (
    <div>
      <div id="feed-page">
        <h1>FEED</h1>
      </div>

      <button onClick={handleCreatePost}>Create Post</button>

      {isCreatingPost && (
        <form onSubmit={handleSubmit}>
          <label>
            Header:
            <textarea
              value={header}
              onChange={(e) => setHeader(e.target.value)}
            />
          </label>
          <br />

          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="post-container">
        {events.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          events.map((event) => (
            <Post
              key={event.id}
              header={<strong>{event.header}</strong>}
              content={event.content}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
