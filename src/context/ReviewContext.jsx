import { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(() => {
    return JSON.parse(localStorage.getItem("reviews")) || [];
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (bookId, text) => {
    setReviews([...reviews, { bookId, text }]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
