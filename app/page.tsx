import Link from "next/link";

export default function Home() {
  return (
    <div className="App">
      <h1 className="text-3xl fond-bold">
        WELCOME
      </h1>
      <h2 className="text-2xl mt-4">
        This Is My First Actual Next.JS App
      </h2>
      <Link className="bg-gray-700 text-white px-4 py-4 mt-4 font-bold rounded-lg" href="/todo"> Go To Todo App</Link>
    </div>
  );
}
