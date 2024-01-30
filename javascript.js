// Import necessary React components and libraries
import React, { useState } from 'react';

// Dummy data for blog posts
const dummyPosts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  // Add more dummy posts as needed
];

// BlogPost component to display individual blog posts
const BlogPost = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </div>
);

// BlogApp component to display the list of blog posts
const BlogApp = () => {
  // State to manage the list of blog posts
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <div>
      <h1>My Blog</h1>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

// Entry point of the application
const App = () => (
  <div>
    <BlogApp />
  </div>
);

export default App;
