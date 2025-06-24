import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center pb-10 min-h-[calc(100vh-60px)] text-center px-4">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="mt-6 text-2xl text-gray-700">Page Not Found!</p>
      <p className="mt-4 text-lg text-gray-400">
        This Page you are looking for does not exist or an other error occurred.
      </p>
      <Link
        href="/"
        className="mt-6 bg-[#333] rounded-xl p-4 shadow-lg text-white hover:bg-[#222] duration-150"
      >
        Go back to homepage
      </Link>
    </div>
  );
}
