import db from "@/db";
import { posts } from "@/db/schema";
import Link from "next/link";

export default async function page() {
  const AllPosts = await db.select().from(posts);
  return (
    <div className="container">
      <h1>All posts</h1>
      <Link href="/posts/new">
        <h1>Create a new post</h1>
      </Link>
      {AllPosts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
