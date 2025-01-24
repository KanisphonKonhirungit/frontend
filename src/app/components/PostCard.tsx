import Link from 'next/link';

export default function PostCard({ title, content, id }: { title: string; content: string; id: number; }) {
  return (
    <div className="p-4 my-2 border rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
      <Link href={`/posts/${id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">view post</button>
      </Link>
    </div>
  );
}
