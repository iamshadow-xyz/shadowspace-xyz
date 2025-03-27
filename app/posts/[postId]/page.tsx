import db from "@/db";
import { posts, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

interface Params {
  params: Promise<{ postId: string }>;
}

export default async function page({ params }: Params) {
  const { postId } = await params;
  const SinglePost = await db
    .select()
    .from(posts)
    .where(eq(posts.id, postId))
    .innerJoin(users, eq(users.id, posts.userId));
  return (
    <div className="container">
      <h1>All posts</h1>
      <Link href="/posts/new">
        <h1>Create a new post</h1>
      </Link>
      <div>
        <h2>{SinglePost[0].posts.title}</h2>
        <p>{SinglePost[0].posts.content}</p>
        <small>{SinglePost[0].posts.createdAt.toLocaleDateString()}</small>
        <p>By: {SinglePost[0].users.name}</p>
        <p>By: {SinglePost[0].users.email}</p>
      </div>
    </div>
  );
}
