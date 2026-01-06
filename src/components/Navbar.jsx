import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">
        📚 BookSphere
      </h1>
      <div className="space-x-6 font-medium">
        <Link className="hover:text-yellow-300 transition" to="/">Home</Link>
        <Link className="hover:text-yellow-300 transition" to="/books">Books</Link>
        <Link className="hover:text-yellow-300 transition" to="/create-blog">Write Blog</Link>
      </div>
    </nav>
  );
}
