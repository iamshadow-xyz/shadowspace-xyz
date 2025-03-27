import React from "react";
import { createNewPost } from "./action";

export default function page() {
  return (
    <div className="container mt-28">
      <h1>Create a new post</h1>
      <form action={createNewPost}>
        <input type="text" name="id" placeholder="your id" />
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="content" placeholder="content" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
