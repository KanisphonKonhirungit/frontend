'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function PostDetailsPage({ params }: { params: { id: string } }) {
  const [posts, setPosts] = useState<any[]>([]); // Adjusted state type to array

  useEffect(() => {
    axios.get('http://localhost:4000/posts/', {
      params: {
        id: params.id,
      },
    }).then(response => {
      const filteredPosts: any[] = [];
      for (let post of response.data) {
        if (post.id == params.id) {
          filteredPosts.push(post);
        }
      }
      setPosts(filteredPosts);
    });
  }, [params.id]); 
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Post Details</h1>
      <div>
      {posts.length > 0 ? (
          posts
            .map((post) => (
              <div key={post.id} className="mb-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{post.content}</p>
              </div>
            ))
        ) : (
          <p>Loading post details...</p> // Show a loading message while fetching
        )}
      </div>
    </div>
  );
}
