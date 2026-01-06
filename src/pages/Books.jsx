import BookCard from "../components/BookCard";

const books = [
  { id: "1", title: "1984", author: "George Orwell" },
  { id: "2", title: "Atomic Habits", author: "James Clear" }
];

export default function Books() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Popular Books
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
