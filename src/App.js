import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReviewProvider } from "./context/ReviewContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import CreateBlog from "./pages/CreateBlog";

export default function App() {
  return (
    <ReviewProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </ReviewProvider>
  );
}
