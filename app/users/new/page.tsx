import React from "react";
import { createNewUser } from "./action";

export default function page() {
  return (
    <div className="container mt-28">
      <h1>Create a new user</h1>
      <form action={createNewUser}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
