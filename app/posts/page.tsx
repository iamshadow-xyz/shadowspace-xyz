import db from "@/db";
import { posts } from "@/db/schema";

export default async function page() {
  const AllPosts = await db.select().from(posts);
  return (
    <div className="container">
      <h1>All posts</h1>
      {AllPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
