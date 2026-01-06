import { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Write Blog</h2>

      <form
        onSubmit={e => {
          e.preventDefault();
          alert("Blog Published");
          setTitle("");
          setContent("");
        }}
      >
        <input
          className="border w-full p-2 mt-2"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border w-full p-2 mt-2"
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button className="bg-green-600 text-white px-4 py-2 mt-3">
          Publish
        </button>
      </form>
    </div>
  );
}
