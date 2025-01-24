'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const min = 1;
    const max = 1000;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    await axios.post('http://localhost:4000/posts', { title, content, userId: 1, id: randomNumber});
    alert('Post created!');
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h1 className="text-2xl font-bold">Create a New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full p-2 my-2 border rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full p-2 my-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}
