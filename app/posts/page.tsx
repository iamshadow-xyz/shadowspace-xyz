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
        <Link href={`/posts/${post.id}`}>
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
