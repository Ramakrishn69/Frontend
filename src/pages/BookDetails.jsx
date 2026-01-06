import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ReviewContext } from "../context/ReviewContext";

export default function BookDetails() {
  const { id } = useParams();
  const { reviews, addReview } = useContext(ReviewContext);
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Book ID: {id}</h2>

        <form
          onSubmit={e => {
            e.preventDefault();
            addReview(id, text);
            setText("");
          }}
        >
          <textarea
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
            placeholder="Write your review..."
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
          <button className="mt-3 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
            Submit Review
          </button>
        </form>

        <h3 className="mt-6 font-semibold text-lg">Reviews</h3>
        {reviews
          .filter(r => r.bookId === id)
          .map((r, i) => (
            <div
              key={i}
              className="mt-2 bg-gray-100 p-3 rounded-lg"
            >
              {r.text}
            </div>
          ))}
      </div>
    </div>
  );
}
