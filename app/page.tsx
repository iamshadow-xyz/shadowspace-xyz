import db from "@/db";
import { posts, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
export default async function Home() {
  const AllPosts = await db
    .select()
    .from(posts)
    .innerJoin(users, eq(users.id, posts.userId));
  return (
    <div className="container">
      <Link href="/posts">
        <h1>Posts</h1>
      </Link>
      <h1>All posts</h1>
      {AllPosts.map((post) => (
        <div key={post.posts.id}>
          <h2>{post.posts.title}</h2>
          <p>{post.posts.content}</p>
          <p>By: {post.users.name}</p>
        </div>
      ))}
    </div>
  );
}
