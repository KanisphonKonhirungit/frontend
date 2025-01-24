'use client';

import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostCard from "../components/PostCard";
export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/posts').then((res) => {
          setPosts(res.data);
        });
        console.log(posts);
        
      }, []);

  return (
    <main className="p-6">
        <div className="flex justify-between ...">
            <div>
                <h1 className="text-3xl font-bold">All Post!</h1>
            </div>
            <div>
            <Link href="/posts/create">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Create New Post</button>
            </Link>
            </div>
        </div>
     
      <ul>
        {posts.map((post) => (
        <PostCard
         title={post.title}
         content={post.content}
         id={post.id}
        />
        ))}
      </ul>
      
    </main>
  );
}
