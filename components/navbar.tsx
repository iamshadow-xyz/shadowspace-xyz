import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="max-w-5xl mx-auto flex items-center justify-between py-8">
      <Link href="/">Shadowspace</Link>
      <nav>
        <h1>Login</h1>
      </nav>
    </header>
  );
}
