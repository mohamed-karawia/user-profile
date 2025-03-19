import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <Link href={`/users/${1}`}>User one</Link>
    </div>
  );
}
