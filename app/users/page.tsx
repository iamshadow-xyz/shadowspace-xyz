import db from "@/db";
import { posts, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function page() {
  const AllUsers = await db
    .select()
    .from(users)
    .innerJoin(posts, eq(users.id, posts.userId));
  return (
    <div className="container">
      <h1>All posts</h1>
      {AllUsers.map((user) => (
        <div key={user.users.id}>
          <h2>{user.users.email}</h2>
          <h2>{user.posts.title}</h2>
        </div>
      ))}
    </div>
  );
}
