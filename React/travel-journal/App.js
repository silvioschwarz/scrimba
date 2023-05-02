import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import data from "./data"

export default function App() {
  const posts = data.map(post => {
    return <Post key={post.title} post={post} />;
  });

  return (
    <div>
      <section className="post-container">{posts}</section>
    </div>
  );
}
