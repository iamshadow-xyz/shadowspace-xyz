import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Link href="/posts">
        <h1>Posts</h1>
      </Link>
    </div>
  );
}
