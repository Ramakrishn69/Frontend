export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-purple-100 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Discover. Review. Share.
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        A modern platform for book lovers to explore books,
        write reviews, and publish blogs.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/books"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Explore Books
        </a>

        <a
          href="/create-blog"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition"
        >
          Write a Blog
        </a>
      </div>
    </div>
  );
}
