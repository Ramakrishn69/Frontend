import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5">
      <h3 className="text-xl font-semibold text-gray-800">
        {book.title}
      </h3>
      <p className="text-gray-500 mb-4">
        by {book.author}
      </p>
      <Link
        to={`/books/${book.id}`}
        className="inline-block text-indigo-600 font-medium hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}
