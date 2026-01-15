import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1>Bienvenue sur mon App TodoList</h1>
      <Link href="/users/signup">Sign Up</Link>
      <Link href="/users/login">Log in</Link>
    </div>
  );
}
