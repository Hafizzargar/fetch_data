import React, { useEffect, useState } from "react";

function Fetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let fxn = async () => {
      let fet = await fetch("https://jsonplaceholder.typicode.com/posts");
      const f = await fet.json();
      setPosts(f);
    };
    fxn();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
